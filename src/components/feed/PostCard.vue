<script setup lang="ts">

</script>

<template>
  <main class="w-full grid lg:grid-cols-[500px_auto_55px] p-3 bg-gray-50/80 dark:bg-gray-900/80 rounded-xl shadow-sm">
    <Carrusel :images="['https://picsum.photos/500', 'https://picsum.photos/501']" justify-self-center />
    <section m-4 lg:m-none>
      cell 2
    </section>
    <section>
      <InteractionBtns />
    </section>
  </main>
</template>
