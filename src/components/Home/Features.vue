<script setup lang="ts">
interface Feature {
  title: string
  text: string
  icon: string
}

const featuresList: Feature[] = [
  {
    title: 'Keep track of your favorite places',
    text: 'Save all the data related to your favorite places, such as menus, photos, recommendations, and schedules',
    icon: 'i-carbon-save',
  },
  {
    title: 'Rate your favorite places and share your experience',
    text: 'Rate the experience, share photos and comments of the places you visit',
    icon: 'i-carbon-star',
  },
  {
    title: 'Share with your friends',
    text: 'Share your experience with your friends and discover new places',
    icon: 'i-carbon-share',
  },
]
</script>

<template>
  <section my-8 px-3>
    <p text="~ 2xl sm:3xl" mb-20>
      You don't know what to do today? <br>
      Seek on your checkpoints
    </p>
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
