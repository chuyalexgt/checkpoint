<script setup lang="ts">
const isMaximized = ref(false)

const msximize = () => {
  isMaximized.value = !isMaximized.value
}
</script>

<template>
  <section
    class="w-fit p-2 shadow-sm hover:shadow-md rounded-md cursor-pointer transition-shadow bg-white"
    @click="msximize"
  >
    <slot />
    <q-dialog
      v-model="isMaximized"
      persistent
      maximized
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="bg-white">
        <q-bar class="bg-transparent">
          <q-btn v-close-popup dense flat size="md" color="primary" icon="arrow_back">
            <q-tooltip class="bg-white text-primary">
              Cerrar
            </q-tooltip>
          </q-btn>
        </q-bar>
        <q-card-section>
          <slot name="maximized" />
        </q-card-section>
      </q-card>
    </q-dialog>
  </section>
</template>
