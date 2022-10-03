<script setup lang="ts">
const actions = $ref([
  {
    icon: 'i-carbon-thumbs-up',
    callback: () => console.log('like'),
  },
  {
    icon: 'i-carbon-share',
    callback: () => console.log('hola'),
  },
  {
    icon: 'i-carbon-add-comment',
    callback: () => console.log('hola'),
  },
])
</script>

<template>
  <div class="flex lg:flex-col gap-3 justify-center items-center w-full h-full relative">
    <div absolute bg-blue-500 class="w-[calc(100%+24px)] h-[calc(100%+24px)] rounded-b-xl lg:rounded-r-xl lg:rounded-b-none" />
    <div v-for="(action, index) in actions" :key="index" flex-1 hover:bg-blue-400 text-white text-2xl :class="action.icon" @click="action.callback" />
  </div>
</template>
