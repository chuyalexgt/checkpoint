<script setup lang="ts">
interface Feature {
  title: string
  text: string
  icon: string
}

const featuresList: Feature[] = [
  {
    title: 'Encuentra grupos de estudio',
    text: 'Grupos de estudio de acuerdo con tus temas de interés, en los cuales podrás compartir tus conocimientos y aprender de los demás',
    icon: 'i-carbon-book',
  },
  {
    title: 'Comparte tus experiencias con la comunidad',
    text: 'Porque no todo es estudio, comparte esos momentos memorables con la comunidad',
    icon: 'i-carbon-events-alt',
  },
  {
    title: 'Haz nuevos amigos',
    text: 'Conecta con personas que compartan tus gustos y crea una sólida amistad',
    icon: 'i-carbon-friendship',
  },
]
</script>

<template>
  <section my-8 px-3>
    <div class="my-6 flex justify-center gap-15">
      <FeatureCard
        v-for="(feature, index) in featuresList"
        :key="index"
        :title="feature.title"
        color="bg-blue-500"
        :icon="feature.icon"
        :text="feature.text"
      />
    </div>
  </section>
</template>
