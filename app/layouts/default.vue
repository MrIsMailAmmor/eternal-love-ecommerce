<template>
  <div class="bg-warm-ivory font-sans">
    <Header />
    <main class="pt-20">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/layout/Header.vue';
import Footer from '~/components/layout/Footer.vue';
</script>
