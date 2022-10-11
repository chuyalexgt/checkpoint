<script setup lang="ts">
// interface Action {
//   type: 'primary' | 'secondary'
//   label: string
//   callback: Function
// }
// const actions: Action[] = [
//   {
//     type: 'primary',
//     label: 'Aceptar',
//     callback: () => {
//       console.log('Aceptar')
//     },
//   },
//   {
//     type: 'secondary',
//     label: 'Rechazar',
//     callback: () => {
//       console.log('Rechazar')
//     },
//   },
// ]
const probe = 'Lorem ipsum dolor sit amet, con Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reprehenderit illo deleniti est? Commodi fugiat maxime unde expedita quaerat odio dolor. Nobis suscipit est laudantium, voluptatibus accusamus perferendis dignissimos molestias.'
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
    <PostCard title="Publicacion de ejemplo" :text="`${probe}${probe}${probe} ${probe}${probe}${probe}`" author="fulanito" />
  </section>
</template>
