<script setup lang="ts">
const emit = defineEmits(['maximize'])
const actions = $ref([
  // like (reaccion)
  {
    icon: 'i-carbon-thumbs-up',
    callback: () => console.log('like'),
  },
  // Compartir
  {
    icon: 'i-carbon-share',
    callback: () => console.log('hola'),
  },
  // Abrir comentarios
  {
    icon: 'i-carbon-add-comment',
    callback: () => console.log('hola'),
  },
  // Maximizar publicacion
  {
    icon: 'i-carbon-maximize',
    callback: () => {
      emit('maximize')
    },
  },
])
</script>

<template>
  <div class="flex lg:flex-col gap-3 justify-center items-center w-full h-full relative">
    <div absolute class="w-[calc(100%+24px)] h-[calc(100%+24px)] rounded-b-xl lg:rounded-r-xl lg:rounded-b-none bg-light-600/80 dark:bg-dark-700" />
    <div v-for="(action, index) in actions" :key="index" flex-1 hover:bg-blue-700 text-2xl transition-all :class="action.icon" @click="action.callback" />
  </div>
</template>
