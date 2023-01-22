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
          width: '0',
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
          ease: 'power2.out',
        })
        .to(
          '#stripe-2',
          {
            duration: 0.25,
            opacity: 1,
            width: '100vw',
            ease: 'power2.out',
          },
          '-=0.25',
        )
        .to(
          '#stripe-3',
          {
            duration: 0.25,
            opacity: 1,
            width: '100vw',
            ease: 'power2.out',
          },
          '-=0.25',
        )
        .to('#circle', {
          duration: 0.35,
          opacity: 1,
          width: '100vw',
          ease: 'sine.out',
          borderRadius: 0,
        })
        .to('#content', {
          duration: 0.25,
          opacity: 1,
          display: 'flex',
          ease: 'sine.out',
        })
    }
  })
})
</script>

<template>
  <section id="stripes-container" relative flex flex-col justify-center items-center class="bg-light-400">
    <div id="stripe-1" fixed class="top-0 left-0 bg-dark-500/70 h-1/3" z-9999 />
    <div id="stripe-2" fixed class="top-1/3 right-0 bg-dark-500/70 h-1/3" z-9999 />
    <div id="stripe-3" fixed class="top-2/3 left-0 bg-dark-500/70 h-1/3" z-9999 />
    <section id="circle" fixed class="top-0 left-0 bg-light-100 aspect-square rounded-br-full" z-10000>
      <section id="content" class="opacity-0 hide flex-col">
        <section pt-3 sticky top-0 class="flex-shrink">
          <div flex w-full px-4>
            <slot name="header">
              <div class="text-xl">
                Centros de trabajo
              </div>
            </slot>
            <q-space />
            <q-btn dense flat icon="close" @click="dialogHandler = false">
              <q-tooltip class="bg-white text-primary">
                Cerrar
              </q-tooltip>
            </q-btn>
          </div>
          <q-separator inset spaced size="4px" color="blue" />
        </section>
        <section flex-1 overflow-auto>
          <slot />
        </section>
      </section>
    </section>
  </section>
</template>
