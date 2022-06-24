<script setup lang="ts">
interface Example {
  name: string
  value: number
}

const interfaceExample = $ref<Example[]>([])
</script>

<template>
  <section>
    <h6>Lista</h6>
    <pre>{{ interfaceExample }}</pre>
    <div flex justify-around>
      <button>Add item</button>
      <button>delete item</button>
    </div>
  </section>
</template>
