<script setup lang="ts">
import { useMainStore } from '~/stores/mainStore'

const mainStore = useMainStore()
</script>

<template>
  <!-- <q-btn color="primary" icon="check" label="OK" @click="mainStore.authSuccess = !mainStore.authSuccess" /> -->

  <section class="flex justify-center items-center h-[calc(100vh-150px)]">
    <div
      cool-gradient gradient-rotate h-full rounded-l-xl transition-all duration-900
      justify-center items-center hidden lg:flex class="max-h-750px" :class=" !mainStore.authSuccess && '!shadow-md lg:flex-1' "
    >
      <!-- <transition name="fade"> -->
      <lottie-player
        v-if="!mainStore.authSuccess" src="../../assets/login1.json" autoplay loop bounce
        speed="0.5" class="w-1/2"
      />
      <!-- <img v-if="!mainStore.authSuccess" src="../../assets/login.gif" hidden lg:block class="w-3/5 mix-blend-multiply"> -->
      <!-- </transition> -->
    </div>
    <div
      flex-1 flex justify-center items-center h-full rounded-r-xl dark:bg-gray-900 transition-all duration-600 class="max-h-750px"
    >
      <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view>
    </div>
  </section>
</template>
