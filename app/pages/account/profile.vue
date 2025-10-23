<template>
  <section class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8 text-center text-secondary">
      Your Profile
    </h1>

    <div
      v-if="authStore.isAuthenticated && authStore.currentUser"
      class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <p class="text-gray-700 font-semibold">
            Username:
          </p>
          <p class="text-secondary">
            {{ authStore.currentUser.username }}
          </p>
        </div>
        <div>
          <p class="text-gray-700 font-semibold">
            Email:
          </p>
          <p class="text-secondary">
            {{ authStore.currentUser.email }}
          </p>
        </div>
        <div>
          <p class="text-gray-700 font-semibold">
            First Name:
          </p>
          <p class="text-secondary">
            {{ authStore.currentUser.firstName }}
          </p>
        </div>
        <div>
          <p class="text-gray-700 font-semibold">
            Last Name:
          </p>
          <p class="text-secondary">
            {{ authStore.currentUser.lastName }}
          </p>
        </div>
        <div>
          <p class="text-gray-700 font-semibold">
            Address:
          </p>
          <p class="text-secondary">
            {{ authStore.currentUser.address }}
          </p>
        </div>
        <div>
          <p class="text-gray-700 font-semibold">
            City:
          </p>
          <p class="text-secondary">
            {{ authStore.currentUser.city }}
          </p>
        </div>
        <div>
          <p class="text-gray-700 font-semibold">
            Postal Code:
          </p>
          <p class="text-secondary">
            {{ authStore.currentUser.postalCode }}
          </p>
        </div>
        <div>
          <p class="text-gray-700 font-semibold">
            Country:
          </p>
          <p class="text-secondary">
            {{ authStore.currentUser.country }}
          </p>
        </div>
      </div>

      <CustomButton
        variant="danger"
        size="medium"
        class="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 mt-6"
        @click="handleLogout"
      >
        Logout
      </CustomButton>
    </div>
    <div
      v-else
      class="text-center text-gray-600 py-10"
    >
      <p class="text-lg mb-4">
        You are not logged in.
      </p>
      <NuxtLink to="/auth/login">
        <CustomButton
          variant="primary"
          size="large"
          class="bg-pink-500 text-white py-2 px-6 rounded-md hover:bg-pink-600 transition-colors text-lg"
        >
          Login Now
        </CustomButton>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/authStore';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const handleLogout = () => {
  authStore.logout();
  router.push('/auth/login');
};
</script>

<style scoped>
/* Add any specific styles for this page here */
</style>
