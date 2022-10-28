<script setup lang="ts">
import gsap from 'gsap'
const props = defineProps<{ number: number; lowRange?: number; decimals?: number }>()

const { number, lowRange } = $(props)
const tweened = reactive({
  number: 0,
})

const rangeClass = computed(() => {
  if (!lowRange)
    return ''
  return number < lowRange ? 'text-red-500' : 'text-green-500'
})

watch($$(number), (n) => {
  gsap.to(tweened, { duration: 0.5, number: Number(n) || 0 })
})
</script>

<template>
  <p class="text-xl font-bold" :class="rangeClass">
    {{ decimals ? tweened.number.toFixed(decimals) : tweened.number }}
  </p>
</template>
