<script setup lang="ts">
import gsap from 'gsap'

const onBeforeEnter = (el: any) => {
  el.style.opacity = 0
  el.style.left = '20px'
  el.style.position = 'relative'
  el.style.color = 'transparent'
}

const onEnter = (el: any, done: any) => {
  gsap.to(el, {
    opacity: 1,
    height: '',
    left: '0',
    color: 'inherit',
    delay: el.dataset.index * 0.1,
    onComplete: done,
  })
}

const onLeave = (el: any, done: any) => {
  gsap.to(el, {
    opacity: 0,
    height: '0',
    left: '20px',
    color: 'transparent',
    delay: el.dataset.index * 0.1,
    onComplete: done,
  })
}
</script>

<template>
  <section w-fit>
    <TransitionGroup
      tag="section"
      :css="false"
      class="flex flex-col gap-4 relative"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
    >
      <slot />
    </TransitionGroup>
  </section>
</template>
