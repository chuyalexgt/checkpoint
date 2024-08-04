<script setup lang="ts">
import lottie from '~/../assets/Hero_City_lottie.json'
</script>

<template>
  <section class="cool-gradient gradient-rotate h-head md:h-75vh md:min-h-0" section>
    <div class="flex items-center flex-col-reverse md:flex-row">
      <div class="md:w-2/3 gap-3 px-4">
        <p text="~ 4xl warm-gray-700" font="extrabold">
          Encuentra tu comunidad
        </p>
        <p text="~ 2xl warm-gray-700" font="semibold">
          Estudiantes de distintas carreras y universidades, todos reunidos en un mismo lugar.
        </p>

        <router-link primary_btn text-2xl mt-8 to="/auth/login">
          Ingresar
        </router-link>
      </div>
      <div class="w-2/3 md:w-1/3">
        <Vue3Lottie :animation-data="lottie" :speed="0.5" :delay="2000" aspect-square :loop="false" />
      </div>
    </div>
  </section>
</template>
