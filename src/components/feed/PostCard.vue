<script setup lang="ts">
defineProps<{
  title: string
  author: string
  text: string
}>()
const maximizePost = ref(false)
</script>

<template>
  <main class="w-full grid lg:grid-cols-[500px_auto_55px] p-3 bg-gray-50/80 dark:bg-gray-900/80 rounded-xl shadow-sm">
    <Carrusel :images="['https://picsum.photos/500', 'https://picsum.photos/501']" justify-self-center />
    <section m-4 lg:m-none px-4 text-justify lg:pr-7>
      <h6>{{ title }}</h6>
      <div>{{ author }}</div>
      <p overflow-auto h-220px px-3>
        {{ text }}
      </p>
    </section>
    <section>
      <InteractionBtns @maximize="() => maximizePost = true" />
    </section>
    <q-dialog v-model="maximizePost">
      <main class="w-full grid lg:grid-cols-[500px_auto_55px] p-3 bg-gray-50/80 dark:bg-gray-900/80 rounded-xl shadow-sm h-full">
        <Carrusel :images="['https://picsum.photos/500', 'https://picsum.photos/501']" justify-self-center />
        <section m-4 lg:m-none px-4 text-justify lg:pr-7>
          <h6>{{ title }}</h6>
          <div>{{ author }}</div>
          <p overflow-auto h-220px px-3>
            {{ text }}
          </p>
        </section>
        <section>
          <InteractionBtns @maximize="() => maximizePost = true" />
        </section>
      </main>
    </q-dialog>
  </main>
</template>
