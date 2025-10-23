<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
  <div v-if="loading" class="loading-overlay">
    <LoadingSpinner />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const loading = ref(true);

onMounted(() => {
  // Simulate a delay for demonstration purposes
  setTimeout(() => {
    loading.value = false;
  }, 1000); // Adjust delay as needed
});
</script>

<style>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white; /* Or your desired background */
  z-index: 9999;
}
</style>