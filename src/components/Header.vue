<script setup lang="ts">

</script>

<template>
  <header class="w-full h-15 mb-3 px-4 flex justify-between items-center sticky top-0 bg-hex-fff dark:bg-hex-121212 z-99 shadow-sm dark:shadow-white/20">
    <div text="~ 2xl" font-extrabold class="flex gap-2">
      <div i-carbon-chart-spiral bg-light-blue-500 />
      <div>Checkpoint</div>
    </div>
    <button icon-btn @click="toggleDark()">
      <div dark:i-carbon-moon i-carbon-sun text-xl />
    </button>
  </header>
</template>
