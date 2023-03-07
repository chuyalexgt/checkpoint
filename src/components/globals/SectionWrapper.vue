<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  baseColor: string
  contrastColor: string
  titleClass: string
}>(), {
  baseColor: 'bg-white',
  contrastColor: 'bg-blue-500',
  titleClass: '',
})

const loaded = ref(false)

const wrapper = ref<HTMLElement | null>(null)

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (wrapper?.value) {
      if (entry.isIntersecting) {
        // El componente es visible en la pantalla, dispara la animación
        loaded.value = true
      }
      else {
        // El componente no es visible en la pantalla
        loaded.value = false
      }
    }
  })
})

onMounted(() => {
  if (wrapper?.value)
    observer.observe(wrapper.value)
})

onUnmounted(() => {
  if (wrapper?.value)
    observer.unobserve(wrapper.value)
})
</script>

<template>
  <section>
    <div ref="wrapper" class="w-full h-1  relative rounded-lg" :class="baseColor">
      <div class="absolute top-0 left-50% h-1 w-0  transition-all duration-500 ease-out rounded-r-lg " :class="[{ 'w-1/2': loaded }, contrastColor]" />
      <div class="absolute top-0 right-50% h-1 w-0  transition-all duration-500 ease-out rounded-l-lg" :class="[{ 'w-1/2': loaded }, contrastColor]" />
      <div class="absolute-center dark:text-dark-100 w-fit max-w-250px md:max-w-50% min-h-10 whitespace-pre-line  px-3 bg-inherit transition-all duration-500 ease-out rounded-lg flex justify-center items-center font-bold capitalize text-lg" :class="titleClass">
        {{ title }}
      </div>
    </div>
    <transition name="slide" mode="out-in">
      <div v-if="loaded" px-2 py-6>
        <slot />
      </div>
    </transition>
  </section>
</template>
