<template>
  <section class="flex items-center justify-center min-h-screen bg-warm-ivory">
    <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
      <h2 class="text-3xl font-bold text-center text-secondary mb-6">
        Login to Your Account
      </h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label
            for="email"
            class="block text-gray-700 text-sm font-bold mb-2"
          >Email:</label>
          <input
            id="email"
            v-model="email"
            type="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block text-gray-700 text-sm font-bold mb-2"
          >Password:</label>
          <input
            id="password"
            v-model="password"
            type="password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
        </div>
        <div class="flex items-center justify-between">
          <CustomButton
            type="submit"
            variant="primary"
            size="large"
            class="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600"
          >
            Login
          </CustomButton>
        </div>
        <p
          v-if="error"
          class="text-red-500 text-xs italic mt-4 text-center"
        >
          {{ error }}
        </p>
        <p class="text-center text-gray-600 text-sm mt-4">
          Don't have an account?
          <NuxtLink
            to="/auth/register"
            class="text-pink-500 hover:underline"
          >
            Register here
          </NuxtLink>.
        </p>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '~/stores/authStore';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const email = ref('');
const password = ref('');
const error = ref<string | null>(null);

const handleLogin = async () => {
  error.value = null;
  // For a fake login, we only check the email against the fake user's email
  // In a real app, you'd send email and password to an API
  const success = await authStore.login(email.value, password.value);
  if (success) {
    router.push('/account/profile');
  } else {
    error.value = 'Invalid credentials or user not found.';
  }
};

definePageMeta({
  layout: 'auth',
});
</script>

<style scoped>
/* Add any specific styles for this page here */
</style>
