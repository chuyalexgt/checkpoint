<script setup lang="ts">
interface Action {
  type: 'primary' | 'secondary'
  label: string
  callback: Function
}
interface Props {
  title: string
  subtitle?: string
  contrast?: string
  icon?: string
  actions?: Action[]
}
const props = withDefaults(defineProps<Props>(), {
  contrast: () => 'blue-500',
})

const colors = $computed(() => {
  return {
    bg: `bg-${props.contrast}`,
    text: `text-${props.contrast}`,
  }
})

const btnClasses = (type: 'primary' | 'secondary') => {
  if (type === 'primary')
    return `${colors.bg} text-white`

  if (type === 'secondary')
    return `${colors.text} bg-transparent`

  return ''
}
</script>

<template>
  <section
    class="flex flex-col w-full min-w-300px max-w-350px bg-light-50 dark:bg-hex-161616 min-h-200px rounded-xl shadow-md"
  >
    <header class="w-full rounded-t-xl flex items-center gap-3 h-14 px-4 text-white flex-wrap" :class="colors.bg">
      <div v-if="icon" :class="icon" class="text-2xl" />
      <div flex flex-col justify-center items-start flex-1>
        <div capitalize text-1rem text-ellipsis overflow-hidden whitespace-nowrap max-w-14rem>
          {{ title }}
        </div>
        <div v-if="subtitle" text-ellipsis overflow-hidden whitespace-nowrap max-w-14rem>
          {{ subtitle }}
        </div>
      </div>
    </header>
    <main p-2 gap-3 flex flex-col flex-1>
      <section flex-1 flex flex-col justify-center items-center w-full>
        <slot name="body" />
      </section>
      <!-- ACTIONS -->
      <section autogrid w-full>
        <button
          v-for="(btn, index) in actions" :key="index"
          class="max-w-180px py-2 rounded-2xl hover:scale-105 transition-transform duration-300"
          :class="btnClasses(btn.type)" @click="btn.callback"
        >
          {{ btn.label }}
        </button>
      </section>
    </main>
  </section>
</template>
