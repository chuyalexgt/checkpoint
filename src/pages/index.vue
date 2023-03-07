<script setup lang="ts">
const prueba = ref([
  'prueba 1',
  'prueba 2',
  'prueba 3',
  'prueba 4',
  'prueba 5',
  'prueba 6',
  'prueba 7',
  'prueba 8',
])
</script>

<template>
  <section class="flex flex-col gap-5">
    <Hero />
    <Features />
    <SectionWrapper title="Prueba de secciones" contrast-color="cool-gradient gradient-rotate">
      <AnimatedList>
        <q-item v-for="e in prueba" :key="e" v-ripple clickable>
          <q-item-section avatar @click="prueba = prueba.filter(element => element !== e)">
            <q-icon color="primary" name="close" />
          </q-item-section>
          <q-item-section>{{ e }}</q-item-section>
        </q-item>
      </AnimatedList>
    </SectionWrapper>
  </section>
</template>
