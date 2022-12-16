<script setup lang="ts">
import gsap from 'gsap'
const props = defineProps<{ trigger: boolean }>()
const { trigger } = $(props)

watch($$(trigger), (val) => {
  const timeline = gsap.timeline({ delay: 0 })
  if (val) {
    timeline.to('stripes-container', {
      display: 'none',
    }, '-=0.5').to('#stripe-1', {
      duration: 0.25,
      opacity: 0,
      width: '0vw',
      ease: 'power2.out',
    }).to('#stripe-2', {
      duration: 0.25,
      opacity: 0,
      width: '0vw',
      ease: 'power2.out',
    }, '-=0.25').to('#stripe-3', {
      duration: 0.25,
      opacity: 0,
      width: '0vw',
      ease: 'power2.out',
    }, '-=0.25')
  }
  else {
    timeline.to('#stripe-1', {
      duration: 0.25,
      opacity: 1,
      width: '100vw',
      ease: 'power2.out',
    }).to('#stripe-2', {
      duration: 0.25,
      opacity: 1,
      width: '100vw',
      ease: 'power2.out',
    }, '-=0.25').to('#stripe-3', {
      duration: 0.25,
      opacity: 1,
      width: '100vw',
      ease: 'power2.out',
    }, '-=0.25').to('stripes-container', {
      display: 'block',
    })
  }
})
</script>

<template>
  <teleport to="#app">
    <section id="stripes-container" relative flex flex-col justify-center items-center bottom-100vh w-screen h-screen class="bg-light-400">
      <div id="stripe-1" absolute class="top-0 left-0  bg-dark-500/70 h-1/3 " z-9999 />
      <div id="stripe-2" absolute class="top-1/3 right-0  bg-dark-500/70 h-1/3 " z-9999 />
      <div id="stripe-3" absolute class="top-2/3 left-0  bg-dark-500/70 h-1/3 " z-9999 />
    </section>
  </teleport>
</template>
