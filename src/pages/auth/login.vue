<script setup lang="ts">
import { useMainStore } from '~/stores/mainStore'

const mainStore = useMainStore()
const { login } = mainStore
const isPwd = ref(true)

const email = ref('')
const password = ref('')
const canLogin = computed(() => {
  return email.value.includes('@') && password.value.length > 0
})

const validate = async () => {
  try {
    const response = await login(email.value, password.value)
    if (response?.status === 'error')
      return response

    mainStore.authSuccess = true
  }
  catch (error) {
    mainStore.authSuccess = false
  }
}
</script>

<template>
  <section class="flex flex-col w-3/4 items-center p-4 transition-all max-w-500px">
    <div w-full>
      <div text="~ 3xl" font-extrabold class="flex gap-2 justify-center">
        <div i-carbon-chart-spiral bg-light-blue-500 />
        <div>Checkpoint</div>
      </div>
      <h2 class="mt-6 text-center text-xl tracking-tight font-bold text-blue-700">
        Ingresa a tu cuenta
      </h2>
    </div>
    <div class="flex flex-col gap-4 py-4 w-full">
      <q-input
        v-model="email"
        outlined
        input-style="dark:text-white"
        lazy-rules
        label="Correo*"
        :rules="[(val) => val.includes('@')]"
        error-message="Ingrese un correo válido"
      />
      <q-input
        v-model="password"
        :rules="[(val) => val !== '']"
        outlined
        lazy-rules
        label="Contraseña*"
        :type="isPwd ? 'password' : 'text'"
        required
        error-message="La contraseña es obligatoria"
      >
        <template #append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
    </div>
    <div class="flex justify-center  m-2 w-full">
      <AsyncBtn
        :callback-on-click="validate"
        success-msj="¡Acceso correcto!, Bienvenido"
        error-msj="Correo y/o contraseña incorrectos"
        :disabled="!canLogin"
      />
    </div>
    <div class=" w-full">
      <a
        href="/"
        class="decoration-none text-dark-700 dark:text-white hover:text-blue-600 hover:underline underline-offset-1 transition-all duration-300"
      >¿Olvidaste tu contraseña?</a>
    </div>
  </section>
</template>
