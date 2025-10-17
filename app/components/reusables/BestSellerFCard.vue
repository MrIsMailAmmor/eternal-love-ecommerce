<template>
  <div
    class="bg-warm-ivory rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 max-w-sm group"
  >
    <div class="aspect-square overflow-hidden relative">
      <NuxtImg
        :src="image"
        :alt="title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div class="p-5 text-center">
      <h3 class="font-serif text-xl text-secondary mb-2">
        {{ title }}
      </h3>
      <p class="text-sm text-gray-600 mb-4">{{ description }}</p>
      <button
        class="bg-accent text-secondary text-sm font-medium px-6 py-2 rounded-full hover:bg-primary hover:text-warm-ivory transition"
      >
        Add to Box
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  description: String,
  image: String,
})
</script>
