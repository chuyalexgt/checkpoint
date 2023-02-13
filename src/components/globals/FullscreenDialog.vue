<script setup lang="ts">
import gsap from 'gsap'
import { useModelWrapper } from '~/composables/useModelWrapper'

const props = defineProps<{ modelValue: Boolean; title?: string }>()
const emit = defineEmits(['update:modelValue'])

const dialogHandler = useModelWrapper(props, emit)
onMounted(() => {
  watchEffect(() => {
    const timeline = gsap.timeline({ delay: 0 })
    if (!dialogHandler.value) {
      timeline
        .to('#content', {
          duration: 0.25,
          opacity: 0,
          display: 'none',
          ease: 'sine.out',
        })
        .to('#circle', {
          duration: 0.35,
          width: 0,
          borderTopRightRadius: 99999,
          borderBottomRightRadius: 99999,
          ease: 'sine.out',
        })
        .to('#stripe-1', {
          duration: 0.25,
          opacity: 0,
          width: '0vw',
          ease: 'power2.out',
        })
        .to(
          '#stripe-2',
          {
            duration: 0.25,
            opacity: 0,
            width: '0vw',
            ease: 'power2.out',
          },
          '-=0.25',
        )
        .to(
          '#stripe-3',
          {
            duration: 0.25,
            opacity: 0,
            width: '0vw',
            ease: 'power2.out',
          },
          '-=0.25',
        )
    }
    else {
      timeline
        .to('#stripe-1', {
          duration: 0.25,
          opacity: 1,
          width: '100vw',
          ease: 'power2.in',
        })
        .to(
          '#stripe-2',
          {
            duration: 0.25,
            opacity: 1,
            width: '100vw',
            ease: 'power2.in',
          },
          '-=0.25',
        )
        .to(
          '#stripe-3',
          {
            duration: 0.25,
            opacity: 1,
            width: '100vw',
            ease: 'power2.in',
          },
          '-=0.25',
        )
        .to('#circle', {
          duration: 0.35,
          opacity: 1,
          width: '100vw',
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          ease: 'sine.in',
        })
        .to('#content', {
          duration: 0.25,
          opacity: 1,
          display: 'flex',
          ease: 'sine.in',
        })
    }
  })
})
</script>

<template>
  <section id="stripes-container" relative flex flex-col justify-center items-center>
    <div id="stripe-1" fixed class="top-0 left-0 bg-dark-500/50 h-1/3" z-9999 />
    <div id="stripe-2" fixed class="top-1/3 right-0 bg-dark-500/50 h-1/3" z-9999 />
    <div id="stripe-3" fixed class="top-2/3 left-0 bg-dark-500/50 h-1/3" z-9999 />
    <section id="circle" fixed class="top-0 left-0 bg-light-100 h-full  rounded-br-full" z-10000>
      <section id="content" class="opacity-0 hide flex-col">
        <section pt-3 sticky top-0 class="flex-shrink">
          <div flex w-full px-4>
            <slot name="header">
              <div class="text-xl capitalize">
                {{ title?.toLowerCase() }}
              </div>
            </slot>
            <q-space />
            <q-btn dense flat icon="close" @click="dialogHandler = false" />
          </div>
          <div bg-blue-500 h-1 my-2 mx-4 rounded-xl />
        </section>
        <section flex-1 overflow-auto>
          <slot />
        </section>
      </section>
    </section>
  </section>
</template>
