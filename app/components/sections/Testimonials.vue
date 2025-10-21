<template>
  <section
    class="relative  py-20 overflow-hidden inset-0 bg-[url('assets/images/soft-bokeh.jpg')] bg-cover bg-center pointer-events-none "
  >
  <div class="container m-auto py-20 ">
    <h2 class="text-4xl font-serif text-[#4a3b2d] mb-12 text-center">
      Love Stories
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="(testimonial, i) in testimonials"
        :key="i"
      >
        <TestimonialCard :testimonial />
      </div>
    </div>
  </div>

  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    quote:
      "The gift felt like a whispered promise — pure, elegant, unforgettable.",
    author: "Camille R",
  },
  {
    quote: "Eternal Love turned an ordinary day into a memory wrapped in gold.",
    author: "Julien M",
  },
  {
    quote:
      "Every detail radiates care and romance — it’s more than a gift, it’s a feeling.",
    author: "Sophie L",
  },
];
</script>
