<template>
  <section class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8 text-center text-secondary">
      Your Shopping Cart
    </h1>

    <div
      v-if="cartStore.cartItemCount === 0"
      class="text-center text-gray-600 py-10"
    >
      <p class="text-lg mb-4">Your cart is currently empty.</p>
      <CustomButton
        variant="primary"
        size="large"
        to="/products"
        class="bg-pink-500 text-white py-2 px-6 rounded-md hover:bg-pink-600 transition-colors text-lg"
      >
        Start Shopping
      </CustomButton>
    </div>

    <div v-else class="flex flex-col lg:flex-row gap-8">
      <!-- Cart Items List -->
      <div class="lg:w-2/3 bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-semibold mb-6 text-primary">
          Items in Your Cart
        </h2>
        <div
          v-for="item in cartStore.cartItems"
          :key="item.id"
          class="flex flex-col md:flex-row items-start md:items-center justify-between py-4 border-b border-blush-nude last:border-b-0"
        >
          <div class="flex items-center mb-4 md:mb-0 w-full md:w-auto">
            <NuxtImg
              :src="item.image"
              :alt="item.name"
              class="w-20 h-20 object-cover rounded-md mr-4"
            />
            <div>
              <p class="font-medium text-lg text-secondary">
                {{ item.name }}
              </p>
              <p class="text-gray-700">${{ item.price }} each</p>
              <div
                v-if="
                  item.type === 'box' &&
                  item.contains &&
                  item.contains.length > 0
                "
                class="mt-2 text-sm text-gray-600"
              >
                <p class="font-semibold">Contents:</p>
                <ul class="list-disc list-inside ml-4">
                  <li
                    v-for="content in getBoxContentsDetails(item)"
                    :key="content.id"
                  >
                    {{ content.quantity }} x {{ content.name }} (${{
                      content.price
                    }}
                    each)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <div class="flex items-center border border-gray-300 rounded-md">
              <CustomButton
                variant="secondary"
                size="small"
                class="px-3 py-1 text-gray-700 hover:bg-gray-100 rounded-l-md"
                @click="
                  cartStore.updateItemQuantity(item.id, item.quantity - 1)
                "
              >
                -
              </CustomButton>
              <span class="w-10 text-center text-gray-800 py-1">{{
                item.quantity
              }}</span>
              <CustomButton
                variant="secondary"
                size="small"
                class="px-3 py-1 text-gray-700 hover:bg-gray-100 rounded-r-md"
                @click="
                  cartStore.updateItemQuantity(item.id, item.quantity + 1)
                "
              >
                +
              </CustomButton>
            </div>
            <CustomButton
              variant="danger"
              size="small"
              class="text-red-500 hover:text-red-700 transition-colors"
              @click="cartStore.removeItem(item.id)"
            >
              Remove
            </CustomButton>
          </div>
        </div>
      </div>

      <!-- Order Summary -->
      <aside class="lg:w-1/3">
        <div class="bg-white p-6 rounded-lg shadow-lg sticky top-24">
          <h2 class="text-2xl font-semibold mb-6 text-primary">
            Order Summary
          </h2>
          <div class="flex justify-between items-center mb-3">
            <span class="text-gray-700"
              >Subtotal ({{ cartStore.cartItemCount }} items):</span
            >
            <span class="font-medium text-secondary"
              >${{ cartStore.cartTotal.toFixed(2) }}</span
            >
          </div>
          <div class="flex justify-between items-center mb-6">
            <span class="text-gray-700">Shipping:</span>
            <span class="font-medium text-secondary">Free</span>
          </div>
          <div
            class="border-t border-blush-nude pt-4 flex justify-between items-center font-bold text-xl text-secondary"
          >
            <span>Total:</span>
            <span>${{ cartStore.cartTotal.toFixed(2) }}</span>
          </div>
          <!-- Replace with actual checkout logic -->
          <NuxtLink to="/checkout" class="block w-full">
            <CustomButton
              variant="primary"
              size="large"
              class="w-full bg-pink-500 text-white py-3 px-6 rounded-md hover:bg-pink-600 transition-colors text-lg mt-6"
            >
              Proceed to Checkout
            </CustomButton>
          </NuxtLink>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCartStore } from "~/stores/cartStore";
import { useProductStore } from "~/stores/productStore";
import { onMounted } from "vue";
import type { CartItem } from "~/types/order";

const cartStore = useCartStore();
const productStore = useProductStore();

onMounted(() => {
  // Ensure products are fetched to get details for box contents
  productStore.fetchProducts();
});

const getBoxContentsDetails = (boxItem: CartItem) => {
  if (boxItem.type === "box" && boxItem.contains) {
    return boxItem.contains
      .map((contained) => {
        const productDetail = productStore.allProducts.find(
          (p) => p.id === contained.productId
        );
        return productDetail
          ? { ...productDetail, quantity: contained.quantity }
          : null;
      })
      .filter(Boolean) as CartItem[];
  }
  return [];
};
</script>

<style scoped>
/* Add any specific styles for this page here */
</style>
