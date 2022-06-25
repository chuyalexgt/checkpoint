<script setup lang="ts">
import { useMainStore } from '~/stores/mainStore'

const mainStore = useMainStore()
const { getRandomDogs } = mainStore
</script>

<template>
  <section section>
    <div class="w-full flex gap-5">
      <img v-for="(dog, index) in mainStore.dogs" :key="index" :src="dog" class="w-52 h-52">
    </div>
    <q-btn color="primary" icon="check" label="search doges" @click="getRandomDogs()" />
  </section>
</template>
