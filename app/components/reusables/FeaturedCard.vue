<template>
  <div
    class="bg-warm-ivory border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 max-w-sm"
  >
    <div class="aspect-4/5 overflow-hidden">
      <NuxtImg
        :src="product.image"
        :alt="product.name"
        class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>

    <div class="text-center py-6 px-4">
      <h3 class="text-xl font-serif text-secondary mb-2">
        {{ product.name }}
      </h3>
      <p class="text-sm text-gray-600 mb-4">
        {{ product.description }}
      </p>
      <p class="text-lg font-bold text-primary mb-4">${{ product.price }}</p>
      <NuxtLink
        :to="`/products/${product.id}`"
        class="text-sm font-medium text-primary hover:underline mr-4"
      >
        View Details
      </NuxtLink>
      <CustomButton
        variant="primary"
        size="medium"
        class="text-sm font-medium bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 cursor-pointer transition-colors"
        @click="addToCart(product)"
      >
        Add to Cart
      </CustomButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "~/types/product";
import { useCartStore } from "~/stores/cartStore";

const cartStore = useCartStore();

defineProps<{
  product: Product;
}>();

const addToCart = (productToAdd: Product) => {
  cartStore.addItem(productToAdd);
};
</script>
