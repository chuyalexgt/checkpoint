<script setup lang="ts">
const props = defineProps<{
  title: string
  color?: string
  icon: string
  text: string
}>()
</script>

<template>
  <div class="w-full md:w-1/3 lg:w-1/4" flex flex-col items-center gap-5>
    <div relative flex justify-center items-center>
      <span class="block absolute -inset-1 scale-85 rounded-full  blur " :class="[props.color]" aria-hidden="true" />
      <div class="bg-blue-400 rounded-full p-2 relative ">
        <div :class="props.icon" text="~ 4xl white" />
      </div>
    </div>
    <p text="~ xl" m-0 font-bold>
      {{ props.title }}
    </p>
    <p m-0 text="~ md">
      {{ props.text }}
    </p>
  </div>
</template>
