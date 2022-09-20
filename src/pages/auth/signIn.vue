<script setup lang="ts">
import { useMainStore } from '~/stores/mainStore'

const mainStore = useMainStore()
const { login, signIn } = mainStore
const isPwd = ref(true)

const email = $ref('')
const password = $ref('')
const passwordConfirm = $ref('')

const canLogin = computed(() => {
  return email.includes('@') && password.length > 0 && password === passwordConfirm
})

const validate = async () => {
  try {
    const response1 = await signIn(email, password)
    if (response1?.status === 'error')
      return response1

    const response2 = await login(email, password)
    if (response2?.status === 'error')
      return response2

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
        Crea tu cuenta
      </h2>
    </div>
    <div class="flex flex-col gap-4 py-4 w-full">
      <q-input
        v-model="email"
        :dark="isDark"
        outlined
        dense
        input-style="dark:text-white"
        lazy-rules
        label="Correo*"
        :rules="[(val) => val.includes('@')]"
        error-message="Ingrese un correo válido"
      />
      <q-input
        v-model="password"
        :dark="isDark"
        :rules="[(val) => val !== '']"
        outlined
        dense
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
      <q-input
        v-model="passwordConfirm"
        :dark="isDark"
        :rules="[(val) => val === password]"
        outlined
        dense
        lazy-rules
        label="Confirmar contraseña*"
        :type="isPwd ? 'password' : 'text'"
        required
        error-message="La contraseña no coincide"
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
    <div border-gray-300 dark:border-white border-t-4 w-full rounded my-4 />
    <div class=" w-full">
      <a
        href="./login"
        class="decoration-none text-dark-700 dark:text-white hover:text-blue-600 hover:underline underline-offset-1 transition-all duration-300"
      >¿Ya tienes una cuenta?, Inicia sesión</a>
    </div>
  </section>
</template>

