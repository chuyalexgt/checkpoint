<script setup lang="ts">
const props = defineProps<{
  images: string[]
}>()
const carrusel = $ref<any>()
const currentImg = ref()
const totalImg = ref()

const prevImg = () => {
  const width = carrusel.clientWidth
  carrusel.scrollLeft -= width
  if (currentImg.value > 1)
    currentImg.value--
}
const nextImg = () => {
  const width = carrusel.clientWidth
  carrusel.scrollLeft += width
  if (currentImg.value < totalImg.value)
    currentImg.value++
}

const updateCounters = () => {
  const position = carrusel?.scrollLeft
  const width = carrusel?.clientWidth
  currentImg.value = Math.floor(position / width) + 1
}

onMounted(() => {
  totalImg.value = props.images.length
  totalImg.value > 0 && (currentImg.value = 1)
})
</script>

<template>
  <main v-if="images.length > 0" class="h-72 w-full max-w-[500px] relative flex items-center">
    <button
      v-if="currentImg !== 1"
      class="w-10 h-10 rounded-full bg-gray-800/30 shadow-md hide sm:flex justify-center items-center absolute left-3 z-10 hover:scale-110 hover:left-1 transition-all" @click="prevImg"
    >
      <div i-carbon-chevron-left class="bg-white text-2xl mr-1" />
    </button>
    <button
      v-if="currentImg !== totalImg"
      class="w-10 h-10 rounded-full bg-gray-800/30 shadow-md hide sm:flex justify-center items-center absolute right-3 z-10 hover:scale-110 hover:right-1 transition-all" @click="nextImg"
    >
      <div i-carbon-chevron-right class="bg-white text-2xl ml-1" />
    </button>
    <div class="w-14 h-8 rounded-md bg-gray-800/70 text-white  hide sm:flex justify-center items-center absolute right-3 z-10 bottom-0 left-[50%] translate-[-50%]">
      {{ `${currentImg} / ${totalImg}` }}
    </div>
    <section
      ref="carrusel"
      class="h-72 w-full max-w-[500px] relative overflow-auto snap-x  flex !flex-nowrap rounded-xl snap-mandatory"
      @scroll="updateCounters"
    >
      <img
        v-for="(image, index) in images" :key="index" :src="image"
        class="w-full h-full sticky left-0 flex-shrink-0 object-cover snap-center"
      >
    </section>
  </main>
</template>

<style scoped>
*::-webkit-scrollbar {
  display: none;
}
</style>
