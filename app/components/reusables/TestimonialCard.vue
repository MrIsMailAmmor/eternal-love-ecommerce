<template>
  <section>
    <div
      class="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-[#f4e2c2] relative transition-transform duration-300 hover:scale-105 hover:shadow-gold-glow cursor-pointer"
    >
      <!-- quote icon -->
      <div class="text-[#b8923a] text-5xl mb-4">“</div>

      <!-- quote text -->
      <p class="text-[#4a3b2d] text-lg italic leading-relaxed mb-6">
        {{ testimonial.quote }}
      </p>

      <!-- divider -->
      <div class="w-16 h-px bg-[#d4af37] mx-auto mb-4" />

      <!-- name -->
      <p class="font-handwritten text-[#4a3b2d] text-xl">
        — {{ testimonial.author }}
      </p>

      <!-- hearts -->
      <div class="flex justify-center mt-3 space-x-1 text-[#d4af37]">
        <span>♥</span><span>♥</span><span>♥</span>
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

<style>
.font-handwritten {
  font-family: "Great Vibes", cursive;
}

@layer utilities {
  .shadow-gold-glow {
    box-shadow: 0 0 25px rgba(212, 175, 55, 0.3);
  }
}
</style>
