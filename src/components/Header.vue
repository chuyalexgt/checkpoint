<script setup lang="ts">

</script>

<template>
  <header class="w-full h-15 mb-3 px-1 flex justify-between items-center sticky ">
    <div text="~ 2xl" font-extrabold class="flex gap-2">
      <div i-carbon-manage-protection bg-light-blue-500 />
      <div>Checkpoint</div>
    </div>
    <button icon-btn @click="toggleDark()">
      <div dark:i-carbon-moon i-carbon-sun text-xl />
    </button>
  </header>
</template>
