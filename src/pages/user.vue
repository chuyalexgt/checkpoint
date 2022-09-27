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
    <RequestCard
      title="prueba" subtitle="example subtitle" icon="i-carbon-error" :actions="actions"
      contrast="green-500"
    >
      <template #body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Tempora impedit similique atque repellendus. Eos eius laborum doloremque nihil? Neque adipisci
        magni at deserunt ad cumque sapiente tempore sed ea aliquid! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Dolores repellendus ea earum voluptatum cupiditate sed, atque, odit minima dignissimos a totam nulla sequi
        facere, veniam at nisi neque? Eius, porro?
      </template>
    </RequestCard>
  </section>
</template>
