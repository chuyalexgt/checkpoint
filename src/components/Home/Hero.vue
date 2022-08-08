<script setup lang="ts">
</script>

<template>
  <section class="cool-gradient gradient-rotate h-head md:h-75vh md:min-h-0" section>
    <div class="flex items-center flex-col-reverse md:flex-row">
      <div class="md:w-2/3 gap-3">
        <p text="~ 4xl warm-gray-700" font="extrabold">
          Gather your favorite places
        </p>
        <p text="~ 2xl warm-gray-700" font="semibold">
          Restaurants, museums, malls... anything you want to remember, here, all together
        </p>

        <button primary_btn text-2xl mt-8>
          Let's started
        </button>
      </div>
      <div class="w-2/3 md:w-1/3">
        <lottie-player src="~/../assets/Hero_City_lottie.json" autoplay loop bounce speed="0.5" />
      </div>
    </div>
  </section>
</template>
