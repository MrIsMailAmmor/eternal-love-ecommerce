<template>
  <div>
    <Hero />
    <FeaturedCollections />
    <BestSellers />
    <About />
    <!-- <Testimonials />
    <Newsletter /> -->
  </div>
</template>

<script setup lang="ts">
import Hero from '~/components/sections/Hero.vue';
import FeaturedCollections from '~/components/sections/FeaturedCollections.vue';
import BestSellers from '~/components/sections/BestSellers.vue';
import About from '~/components/sections/About.vue';
import Testimonials from '~/components/sections/Testimonials.vue';
import Newsletter from '~/components/sections/Newsletter.vue';
</script>
