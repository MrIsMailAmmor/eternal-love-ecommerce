<template>
  <section class="py-16 bg-blush-nude">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-serif text-rich-brown mb-8">
        Our Best Sellers
      </h2>
      <div class="grid md:grid-cols-4 gap-6 px-4">
        <BestSellerCard
          title="Velvet Rose Box"
          description="A timeless bouquet of red and ivory roses."
          image="best-sellers/forHer.png"
        />
        <BestSellerCard
          title="Golden Hour Candle"
          description="Warm vanilla and amber tones for cozy nights."
          image="best-sellers/forHim.png"
        />
        <BestSellerCard
          title="Chocolate Harmony"
          description="Fine handcrafted truffles wrapped with care."
          image="best-sellers/birthday.png"
        />
        <BestSellerCard
          title="Blush Perfume Set"
          description="Soft floral fragrance that captures affection."
          image="best-sellers/forHim.png"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BestSellerCard from '~/components/reusables/BestSellerFCard.vue';
</script>
