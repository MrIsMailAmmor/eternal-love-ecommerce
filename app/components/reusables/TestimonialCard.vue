<template>
  <section>
    <div
      class="bg-blush-nude/70 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-accent relative transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
    >
      <!-- quote icon -->
      <div class="text-primary text-5xl mb-4">
        “
      </div>

      <!-- quote text -->
      <p class="text-secondary text-lg italic leading-relaxed mb-6">
        {{ testimonial.quote }}
      </p>

      <!-- divider -->
      <div class="w-16 h-px bg-primary mx-auto mb-4" />

      <!-- name -->
      <p class="font-serif text-secondary text-xl">
        — {{ testimonial.author }}
      </p>

      <!-- hearts -->
      <div class="flex justify-center mt-3 space-x-1 text-primary">
        <Icon
          name="uil:heart"
          class="bg-primary"
        />
        <Icon name="uil:heart" />
        <Icon name="uil:heart" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  testimonial: {
    type: Object,
    default: () => ({ quote: "", author: "" }),
  },
});
</script>
