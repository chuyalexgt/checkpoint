<script setup lang="ts">
import { useQuasar } from 'quasar'

const props = defineProps<{
  callbackOnClick: Function
  successMsj: string
  errorMsj: string
}>()

type BtnState = 'success' | 'error' | 'loading' | null
const $q = useQuasar()
const btnState = ref<BtnState>(null)
const loginBtn = ref()
const callbackMessage = ref(null)

const setLoading = () => {
  btnState.value = 'loading'
  loginBtn.value.classList.add('loginBtn-active')
}
const setSuccess = () => {
  btnState.value = 'success'
  loginBtn.value.classList.add('loginBtn-active', 'bg-green-500')
  $q.notify({
    message: props.successMsj,
    color: 'green',
    timeout: 2000,
  })
  setTimeout(() => {
    btnState.value = null
    loginBtn.value.classList.remove('loginBtn-active', 'bg-green-500', 'bg-red-500')
    loginBtn.value.classList.add('bg-[#0071bc]')
  }, 3000)
}
const setError = () => {
  btnState.value = 'error'
  loginBtn.value.classList.add('loginBtn-active', 'bg-red-500')
  $q.notify({
    message: callbackMessage.value || props.errorMsj,
    color: 'red',
    timeout: 2000,
  })
  setTimeout(() => {
    btnState.value = null
    loginBtn.value.classList.remove('loginBtn-active', 'bg-green-500', 'bg-red-500')
    loginBtn.value.classList.add('bg-[#0071bc]')
  }, 3000)
}

const onClick = async () => {
  if (btnState.value)
    return
  try {
    setLoading()
    const response = await props.callbackOnClick()
    if (response?.status === 'error') {
      callbackMessage.value = response.message
      throw new Error(response)
    }
    setSuccess()
  }
  catch (error) {
    setError()
  }
}
</script>

<template>
  <button
    ref="loginBtn"
    class="loginBtn bg-[#0071bc]"
    :disabled="btnState === 'loading' || btnState === 'success' || btnState === 'error'"
    @click="onClick"
  >
    <span class="text">Ingresar</span>
    <div v-if="btnState === 'success'" i-carbon-checkmark class="icon text-2xl w-full" />
    <div v-if="btnState === 'error'" i-carbon-close class="icon text-2xl w-full" />
    <div v-if="btnState === 'loading'" class="icon flex justify-center items-center">
      <div
        class="spin-loading aspect-square w-40px border-6 border-t-white border-transparent inline-block rounded-full animate-spin"
      />
    </div>
  </button>
</template>

<style scoped>
.loginBtn:disabled {
  opacity: 1 !important;
}
.loginBtn {
  position: relative;
  width: 95px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid transparent;
  font-size: 1em;
  font-weight: 500;
  color: white;
  cursor: pointer;
  transition: all 0.5s;
}
.loginBtn * {
  transition: opacity 0.25s;
}
.icon {
  opacity: 0;
  display: none;
}
.loginBtn-active {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.loginBtn-active .text {
  opacity: 0;
  display: none;
}
.loginBtn-active .icon {
  opacity: 1;
  transition-delay: 0.5s;
  display: flex;
}
</style>
