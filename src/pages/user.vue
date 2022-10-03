<script setup lang="ts">
interface Action {
  type: 'primary' | 'secondary'
  label: string
  callback: Function
}
const actions: Action[] = [
  {
    type: 'primary',
    label: 'Aceptar',
    callback: () => {
      console.log('Aceptar')
    },
  },
  {
    type: 'secondary',
    label: 'Rechazar',
    callback: () => {
      console.log('Rechazar')
    },
  },
]
</script>

<template>
  <section flex>
    <!-- <RequestCard title="prueba" subtitle="example subtitle" icon="i-carbon-error" :actions="actions">
      <template #body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor, sit amet consectetur
        adipisicing elit.
      </template>
    </RequestCard>
    <CircularMenu /> -->
    <!-- <Carrusel :images="['https://picsum.photos/500', 'https://picsum.photos/501']" /> -->
    <PostCard />
  </section>
</template>
