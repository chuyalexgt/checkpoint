<script setup lang="ts">
const authSuccess = $ref(false)
</script>

<template>
  <q-btn color="primary" icon="check" label="OK" @click="authSuccess = !authSuccess" />

  <section class="flex justify-center items-center h-[calc(100vh-150px)]">
    <div
      cool-gradient gradient-rotate h-full rounded-l-xl transition-all duration-900 flex
      justify-center items-center :class=" !authSuccess && '!shadow-md lg:flex-1' "
    >
      <!-- <transition name="fade"> -->
      <lottie-player
        v-if="!authSuccess" src="../../assets/login1.json" autoplay loop bounce
        speed="0.5" class="w-1/2"
      />
      <!-- <img v-if="!authSuccess" src="../../assets/login.gif" hidden lg:block class="w-3/5 mix-blend-multiply"> -->
      <!-- </transition> -->
    </div>
    <div
      flex-1 flex justify-center h-full rounded-r-xl transition-all duration-900
      :class="authSuccess && '!shadow-lg rounded-xl'"
    >
      <router-view v-slot="{ Component }">
        <transition name="slide" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view>
    </div>
  </section>
</template>
