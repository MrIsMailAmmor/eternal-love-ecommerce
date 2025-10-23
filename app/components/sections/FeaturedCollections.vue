<template>
  <section class="py-16 bg-primary-light relative">
    <HeartPattern
      main-color="#6B1E1E"
      class="absolute opacity-50 top-0 left-0 z-1"
      height="fit-content"
    />
    <CoupleTogether
      main-color="#6B1E1E"
      class="absolute opacity-50 bottom-0 right-0 z-1"
    />
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-serif text-warm-ivory mb-8">
        Thoughtful Gestures of Affection
      </h2>
      <div class="grid md:grid-cols-3 gap-8 px-4 justify-center">
        <FeaturedCard
          v-for="(product, index) in products"
          :key="index"
          :product
          class="z-2"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FeaturedCard from "~/components/reusables/FeaturedCard.vue";
import type { Product } from "~/types/product";

const products: Product[] = [
  {
    id: "1",
    name: "Anniversary",
    description: "Eternalize Your Moment",
    image: "/birthday.png",
    category: "Anniversary",
    type: "single",
    price: "49.99",
    contains: [],
  },
  {
    id: "2",
    name: "Birthday",
    description: "Celebrate with Love",
    image: "/forHer.png",
    category: "Birthday",
    type: "single",
    price: "49.99",
    contains: [],
  },
  {
    id: "3",
    name: "Get Well Soon",
    description: "Celebrate with Love",
    image: "/forHim.png",
    category: "Get Well Soon",
    type: "single",
    price: "49.99",
    contains: [],
  },
];
</script>
