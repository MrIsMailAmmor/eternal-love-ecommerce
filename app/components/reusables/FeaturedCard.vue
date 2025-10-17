<template>
  <div
    class="bg-warm-ivory border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 max-w-sm"
  >
    <div class="aspect-[4/5] overflow-hidden">
      <NuxtImg 
        :src="image"
        :alt="title"
        class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>

    <div class="text-center py-6 px-4">
      <h3 class="text-xl font-serif text-secondary mb-2">{{ title }}</h3>
      <p class="text-sm text-gray-600 mb-4">{{ description }}</p>
      <a href="#" class="text-sm font-medium text-primary hover:underline">
        Shop Now
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  description: String,
  image: String,
});
</script>
