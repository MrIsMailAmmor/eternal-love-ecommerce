<template>
  <div class="bg-warm-ivory font-sans">
    <Navbar />
    <main class="pt-20">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from "~/components/layout/Footer.vue";
import Navbar from "~/components/layout/Navbar.vue";
</script>
