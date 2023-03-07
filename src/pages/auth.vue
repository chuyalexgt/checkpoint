<script setup lang="ts">
import lottie from '~/../assets/login1.json'
import { useMainStore } from '~/stores/mainStore'

const mainStore = useMainStore()
</script>

<template>
  <!-- <q-btn color="primary" icon="check" label="OK" @click="mainStore.authSuccess = !mainStore.authSuccess" /> -->

  <section class="flex justify-center items-center">
    <div
      cool-gradient gradient-rotate h-full rounded-l-xl transition-all duration-900
      justify-center items-center hidden lg:flex :class=" !mainStore.authSuccess && '!shadow-md lg:flex-1' "
    >
      <Vue3Lottie v-if="!mainStore.authSuccess" :animation-data="lottie" :speed="0.5" :delay="1000" class="w-1/2" />
    </div>
    <div
      flex-1 flex justify-center items-center h-full transition-all duration-600 class="!rounded-r-xl"
    >
      <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view>
    </div>
  </section>
</template>
