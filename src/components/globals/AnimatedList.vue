<script setup lang="ts">
import gsap from 'gsap'

const onBeforeEnter = (el: any) => {
  el.style.opacity = 0
}

const onEnter = (el: any, done: any) => {
  gsap.to(el, {
    opacity: 1,
    height: '',
    delay: el.dataset.index * 0.1,
    onComplete: done,
  })
}

const onLeave = (el: any, done: any) => {
  gsap.to(el, {
    opacity: 0,
    height: '0',
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
      class="flex flex-col gap-1"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
    >
      <slot />
    </TransitionGroup>
  </section>
</template>
