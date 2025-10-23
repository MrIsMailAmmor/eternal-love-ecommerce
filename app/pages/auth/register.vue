<template>
  <section class="flex items-center justify-center min-h-screen bg-warm-ivory">
    <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
      <h2 class="text-3xl font-bold text-center text-secondary mb-6">
        Create Your Account
      </h2>
      <form @submit.prevent="handleRegister">
        <div class="mb-4">
          <label
            for="username"
            class="block text-gray-700 text-sm font-bold mb-2"
          >Username:</label>
          <input
            id="username"
            v-model="userData.username"
            type="text"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
        </div>
        <div class="mb-4">
          <label
            for="email"
            class="block text-gray-700 text-sm font-bold mb-2"
          >Email:</label>
          <input
            id="email"
            v-model="userData.email"
            type="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
        </div>
        <div class="mb-4">
          <label
            for="firstName"
            class="block text-gray-700 text-sm font-bold mb-2"
          >First Name:</label>
          <input
            id="firstName"
            v-model="userData.firstName"
            type="text"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
        </div>
        <div class="mb-4">
          <label
            for="lastName"
            class="block text-gray-700 text-sm font-bold mb-2"
          >Last Name:</label>
          <input
            id="lastName"
            v-model="userData.lastName"
            type="text"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
        </div>
        <div class="mb-4">
          <label
            for="address"
            class="block text-gray-700 text-sm font-bold mb-2"
          >Address:</label>
          <input
            id="address"
            v-model="userData.address"
            type="text"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
        </div>
        <div class="mb-4">
          <label
            for="city"
            class="block text-gray-700 text-sm font-bold mb-2"
          >City:</label>
          <input
            id="city"
            v-model="userData.city"
            type="text"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
        </div>
        <div class="mb-4">
          <label
            for="postalCode"
            class="block text-gray-700 text-sm font-bold mb-2"
          >Postal Code:</label>
          <input
            id="postalCode"
            v-model="userData.postalCode"
            type="text"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
        </div>
        <div class="mb-6">
          <label
            for="country"
            class="block text-gray-700 text-sm font-bold mb-2"
          >Country:</label>
          <input
            id="country"
            v-model="userData.country"
            type="text"
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
            Register
          </CustomButton>
        </div>
        <p
          v-if="error"
          class="text-red-500 text-xs italic mt-4 text-center"
        >
          {{ error }}
        </p>
        <p class="text-center text-gray-600 text-sm mt-4">
          Already have an account?
          <NuxtLink
            to="/auth/login"
            class="text-pink-500 hover:underline"
          >
            Login here
          </NuxtLink>.
        </p>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useAuthStore } from '~/stores/authStore';
import { useRouter } from 'vue-router';
import type { User } from '~/types/auth';

const authStore = useAuthStore();
const router = useRouter();

const userData = reactive<Omit<User, 'id'>>({
  username: '',
  email: '',
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  postalCode: '',
  country: '',
});
const password = ref('');
const error = ref<string | null>(null);

const handleRegister = async () => {
  error.value = null;
  // In a real application, you would send userData and password to an API
  const success = await authStore.register(userData, password.value);
  if (success) {
    router.push('/account/profile');
  } else {
    error.value = 'Registration failed. Please try again.';
  }
};

definePageMeta({
  layout: 'auth',
});
</script>

<style scoped>
/* Add any specific styles for this page here */
</style>
