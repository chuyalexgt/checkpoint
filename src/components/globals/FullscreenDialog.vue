<script setup lang="ts">
import gsap from 'gsap'

const props = withDefaults(
  defineProps<{
    modelValue: boolean
    section?: string
    title: string
    subsections?: { name: string; title: string }[]
  }>(),
  {
    section: 'main',
    subsections: [] as any,
  },
)

const emit = defineEmits(['update:modelValue', 'update:section', 'show', 'hide'])

const dialogHandler = useModelWrapper(props as any, emit)
const sectionHandler = useModelWrapper(props as any, emit, 'section')

const targetSubtitle = computed(() => {
  return props.subsections!.find((e: any) => e.name === sectionHandler.value)!.title
})

const dialogTitle = computed(() => {
  return sectionHandler.value === 'main' ? props.title : ` ${targetSubtitle.value}`
})

const onBeforeEnter = (el: any) => {
  el.style.opacity = 0
  el.style.position = 'relative'
  el.style.color = 'transparent'
}

const onEnter = (el: any, done: any) => {
  gsap.to(el, {
    opacity: 1,
    height: '',
    color: 'inherit',
    delay: 0.6,
    onComplete: done,
  })
}

const onLeave = (el: any, done: any) => {
  gsap.to(el, {
    opacity: 0,
    height: '0',
    color: 'transparent',
    delay: 0,
    onComplete: done,
  })
}

onMounted(() => {
  watchEffect(() => {
    const timeline = gsap.timeline({ delay: 0 })
    if (!dialogHandler.value) {
      sectionHandler.value = 'main'
      emit('hide')
      timeline
        .to('body', {
          duration: 0.05,
          overflow: 'visible',
        })
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
      emit('show')
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
        .to('body', {
          duration: 0.05,
          overflow: 'hidden',
        })
        .to('#circle', {
          duration: 0.35,
          opacity: 1,
          width: '100vw',
          overflow: 'auto',
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
  <div id="stripe-1" fixed class="top-0 left-0 bg-dark-500/50 h-1/3" z-2000 />
  <div id="stripe-2" fixed class="top-1/3 right-0 bg-dark-500/50 h-1/3" z-2000 />
  <div id="stripe-3" fixed class="top-2/3 left-0 bg-dark-500/50 h-1/3" z-2000 />
  <section id="circle" fixed overflow-auto class="top-0 left-0 bg-light-100 h-full opacity-0 rounded-br-full" z-2001>
    <section id="content" class="flex flex-col h-full">
      <section pt-3 sticky z-2003 bg-light-100 top-0 class="flex-shrink">
        <div flex w-full px-4>
          <slot name="header">
            <div class="text-xl capitalize">
              {{ dialogTitle?.toLowerCase() }}
            </div>
          </slot>
          <q-space />
          <q-btn dense flat icon="close" @click="dialogHandler = false" />
        </div>
        <div bg-blue-500 h-1 my-2 mx-4 rounded-xl />
      </section>
      <transition-group
        tag="section"
        flex-1
        overflow-auto
        :css="false"
        @before-enter="onBeforeEnter"
        @enter="onEnter"
        @leave="onLeave"
      >
        <section v-if="sectionHandler === 'main'" key="main" h-full px-4 py-2>
          <slot />
        </section>
        <section
          v-for="(subsection, index) in subsections"
          v-else
          :key="index"
          h-full
          :class="sectionHandler !== subsection.name && 'hidden'"
        >
          <section v-if="sectionHandler === subsection.name" flex-1 px-4 py-2 h-full flex flex-col>
            <button hover:text-blue-500 transition-all flex flex-shrink gap-2 text-sm @click="sectionHandler = 'main'">
              <div i-carbon-arrow-left />
              <span>Regresar</span>
            </button>
            <section flex-1>
              <slot :name="subsection.name" />
            </section>
          </section>
        </section>
      </transition-group>
    </section>
  </section>
</template>
