<script setup lang="ts">
interface Option {
  label: string
  icon: string
  action: Function
}

type Colors = 'blue' | 'green' | 'red' | 'orange' | 'purple' | 'yellow'

interface Props {
  contrast?: Colors
  options: Option[]
}

const props = withDefaults(defineProps<Props>(), {
  contrast: 'blue',
})
const showMenu = ref(false)

const bgContrast = computed(() => 'bg-blue-300')
const colorContrast = computed(() => 'bg-blue-600')
</script>

<template>
  <section relative flex w-full shadow-md rounded-md min-h-300px>
    <div
      class="w-55px z-2 min-h-full absolute flex flex-col gap-2 items-start p-4 transition-all duration-500 ease-out "
      :class="showMenu && `!w-300px shadow-lg dark:text-dark bg-blue-300` "
      @click="showMenu = !showMenu"
    >
      <div i-carbon-menu text-xl mb-2 :class="colorContrast" />
      <ul flex flex-col gap-2>
        <Transition v-for="(option, index) in options" :key="index" name="fade">
          <li v-if="showMenu" text-xl flex gap-4 hover:text-blue-500 @click="option.action">
            <div :class="option.icon" />
            <span>{{ option.label }}</span>
          </li>
        </Transition>
      </ul>
    </div>
    <div relative p-4 class="w-[calc(100%-55px)] left-55px">
      <h6>
        title
      </h6>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, recusandae quae nostrum ipsam sit hic,
        sapiente tempore provident voluptatum libero dicta distinctio assumenda ipsa debitis eius laboriosam, quos
        aperiam facilis.
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
