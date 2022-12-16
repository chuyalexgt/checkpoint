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
// const probe = 'Lorem ipsum dolor sit amet, con Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reprehenderit illo deleniti est? Commodi fugiat maxime unde expedita quaerat odio dolor. Nobis suscipit est laudantium, voluptatibus accusamus perferendis dignissimos molestias.'
// const input = ref(0)
// const list = [
//   { msg: 'Bruce Lee' },
//   { msg: 'Jackie Chan' },

//   { msg: 'Chuck Norris' },
//   { msg: 'Jet Li' },
//   { msg: 'Kung Fury' },
// ]

// const query = ref('')

// const computedList = computed(() => {
//   return list.filter(item => item.msg.toLowerCase().includes(query.value))
// })

// const printPdf = () => {
//   window.print()
// }
const dialog = ref(false)
</script>

<template>
  <section flex flex-col>
    <!-- <RequestCard title="prueba" subtitle="example subtitle" icon="i-carbon-error" :actions="actions">
      <template #body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor, sit amet consectetur
        adipisicing elit.
      </template>
    </RequestCard>
    <CircularMenu />
    <Carrusel :images="['https://picsum.photos/500', 'https://picsum.photos/501']" />
    <PostCard title="Publicacion de ejemplo" :text="`${probe}${probe}${probe} ${probe}${probe}${probe}`" author="fulanito" />
    <input v-model="input" type="number">
    <NumberCounter :number="input" :decimals="0" />
    <input v-model="query">
    <AnimatedList>
      <div
        v-for="(item, index) in computedList"
        :key="item.msg"
        class="w-200px bg-teal-100 border-teal-400 border-4 rounded-lg gap-4 h-45px"
        :data-index="index"
      >
        {{ item.msg }}
      </div>
    </AnimatedList>
    <MaxCard />
    <q-btn color="primary" icon="check" label="print" @click="printPdf" /> -->
    <q-btn color="primary" icon="check" label="OK" relative z-99999 @click="dialog = !dialog" />
    <Dialog :trigger="dialog" />
    <q-btn color="primary" icon="check" label="OK" @click="true" />
  </section>
</template>
