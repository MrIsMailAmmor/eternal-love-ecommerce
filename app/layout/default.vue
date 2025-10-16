<template>
  <div class="bg-warm-ivory font-sans">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/layout/Header.vue';
import Footer from '~/components/layout/Footer.vue';
</script>
