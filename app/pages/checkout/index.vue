<template>
  <section class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8 text-center text-secondary">Checkout</h1>

    <div class="flex flex-col lg:flex-row gap-8">
      <!-- Delivery Information Form -->
      <div class="lg:w-2/3 bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-semibold mb-6 text-primary">
          Delivery Information
        </h2>
        <form @submit.prevent="placeOrder">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label
                for="fullName"
                class="block text-sm font-medium text-gray-700"
                >Full Name</label
              >
              <input
                id="fullName"
                v-model="deliveryInfo.fullName"
                type="text"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700"
                >Email</label
              >
              <input
                id="email"
                v-model="deliveryInfo.email"
                type="email"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700"
                >Phone Number</label
              >
              <input
                id="phone"
                v-model="deliveryInfo.phone"
                type="tel"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>
            <div>
              <label
                for="address"
                class="block text-sm font-medium text-gray-700"
                >Address</label
              >
              <input
                id="address"
                v-model="deliveryInfo.address"
                type="text"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>
            <div>
              <label for="city" class="block text-sm font-medium text-gray-700"
                >City</label
              >
              <input
                id="city"
                v-model="deliveryInfo.city"
                type="text"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>
            <div>
              <label
                for="postalCode"
                class="block text-sm font-medium text-gray-700"
                >Postal Code</label
              >
              <input
                id="postalCode"
                v-model="deliveryInfo.postalCode"
                type="text"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>
            <div>
              <label
                for="country"
                class="block text-sm font-medium text-gray-700"
                >Country</label
              >
              <input
                id="country"
                v-model="deliveryInfo.country"
                type="text"
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>
          </div>

          <h2 class="text-2xl font-semibold mb-6 text-primary">
            Order Summary
          </h2>
          <ClientOnly>
            <div
              v-if="cartStore.cartItemCount === 0"
              class="text-gray-600 mb-4"
            >
              Your cart is empty. Please add items before checking out.
            </div>
            <div v-else>
              <ul class="mb-4 space-y-2">
                <li
                  v-for="item in cartStore.cartItems"
                  :key="item.id"
                  class="flex justify-between items-center py-2 border-b border-blush-nude last:border-b-0"
                >
                  <div class="flex items-center">
                    <NuxtImg
                      :src="item.image"
                      :alt="item.name"
                      class="w-12 h-12 object-cover rounded-md mr-3"
                    />
                    <div>
                      <p class="font-medium text-secondary">
                        {{ item.name }}
                      </p>
                      <p class="text-sm text-gray-600">
                        {{ item.quantity }} x ${{ item.price }}
                      </p>
                    </div>
                  </div>
                  <span class="font-medium text-secondary"
                    >${{ (item.quantity * +item.price).toFixed(2) }}</span
                  >
                </li>
              </ul>
              <div class="border-t border-blush-nude pt-4">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-gray-700">Subtotal:</span>
                  <span class="font-medium text-secondary"
                    >${{ cartStore.cartTotal.toFixed(2) }}</span
                  >
                </div>
                <div class="flex justify-between items-center mb-2">
                  <span class="text-gray-700">Shipping:</span>
                  <span class="font-medium text-secondary">{{
                    shippingFee === 0 ? "Free" : shippingFee.toFixed(2)
                  }}</span>
                </div>
                <div
                  class="flex justify-between items-center font-bold text-xl text-secondary mt-4"
                >
                  <span>Total:</span>
                  <span>${{ finalTotal.toFixed(2) }}</span>
                </div>
              </div>
            </div>
          </ClientOnly>
          <CustomButton
            type="submit"
            variant="primary"
            size="large"
            class="w-full bg-pink-500 text-white py-3 px-6 rounded-md hover:bg-pink-600 transition-colors text-lg mt-8"
            :disabled="cartStore.cartItemCount === 0"
          >
            Place Order
          </CustomButton>
        </form>
      </div>

      <!-- Placeholder for other checkout info (e.g., payment methods) -->
      <div class="lg:w-1/3">
        <div class="bg-white p-6 rounded-lg shadow-lg sticky top-24">
          <h2 class="text-2xl font-semibold mb-4 text-primary">
            Payment Method
          </h2>
          <p class="text-gray-600">Payment integration will go here.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useCartStore } from "~/stores/cartStore";

const cartStore = useCartStore();

const deliveryInfo = ref({
  fullName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  postalCode: "",
  country: "",
});

const shippingFee = computed(() => {
  const total = cartStore.cartTotal;
  return total > 100 ? 0 : 10; // Free shipping over 100 EUR, otherwise 10 EUR
});

const finalTotal = computed(() => {
  return cartStore.cartTotal + shippingFee.value;
});

const placeOrder = () => {
  if (cartStore.cartItemCount === 0) {
    alert("Your cart is empty. Please add items before placing an order.");
    return;
  }
  if (
    !deliveryInfo.value.fullName ||
    !deliveryInfo.value.email ||
    !deliveryInfo.value.address
  ) {
    alert("Please fill in all required delivery information.");
    return;
  }
  alert(`Order Placed!\nTotal: $${finalTotal.value.toFixed(2)}
Delivery to: ${deliveryInfo.value.fullName}, ${deliveryInfo.value.address}, ${
    deliveryInfo.value.city
  }`);
  cartStore.clearCart(); // Clear cart after successful order
  // In a real application, you would send this data to a backend API
};
</script>

<style scoped>
/* Add any specific styles for this page here */
</style>
