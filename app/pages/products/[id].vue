<template>
  <section class="container mx-auto px-4 py-8">
    <div
      v-if="productStore.loading"
      class="text-center text-gray-500"
    >
      Loading product details...
    </div>
    <div
      v-else-if="productStore.error"
      class="text-center text-red-500"
    >
      Error: {{ productStore.error }}
    </div>
    <div
      v-else-if="!product"
      class="text-center text-gray-500"
    >
      Product not found.
    </div>
    <div
      v-else
      class="flex flex-col md:flex-row gap-8 items-start"
    >
      <div class="md:w-1/2">
        <NuxtImg
          :src="product.image"
          :alt="product.name"
          class="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <div class="md:w-1/2">
        <h1 class="text-4xl font-bold mb-4">
          {{ product.name }}
        </h1>
        <p class="text-xl text-gray-700 mb-4">
          ${{ product.price }}
        </p>
        <p class="text-gray-600 mb-6">
          {{ product.description }}
        </p>

        <div
          v-if="product.type === 'box'"
          class="mb-6"
        >
          <h2 class="text-2xl font-semibold mb-3">
            Box Contents:
          </h2>
          <ul class="list-disc list-inside ml-4">
            <li
              v-for="item in boxContents"
              :key="item.id"
              class="text-gray-700"
            >
              {{ item.quantity }} x {{ item.name }} (${{ item.price }}
              each)
            </li>
          </ul>
        </div>

        <CustomButton
          variant="primary"
          size="large"
          class="bg-pink-500 text-white py-3 px-6 rounded-md hover:bg-pink-600 text-lg"
          @click="addToCart(product)"
        >
          Add to Cart
        </CustomButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProductStore } from "~/stores/productStore";
import { useCartStore } from "~/stores/cartStore";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import type { Product } from "~/types/product";
import type { CartItem } from "~/types/order";

const productStore = useProductStore();
const cartStore = useCartStore();
const route = useRoute();

const product = ref<Product | null>(null);
const boxContents = ref<CartItem[]>([]);

onMounted(async () => {
  await productStore.fetchProducts();
  const productId = route.params.id as string;
  const foundProduct =
    productStore.allProducts.find((p) => p.id === productId) || null;
  product.value = foundProduct;

  if (product.value && product.value.type === "box" && product.value.contains) {
    boxContents.value = product.value.contains
      .map((containedItem) => {
        const singleProduct = productStore.allProducts.find(
          (p) => p.id === containedItem.productId
        );
        return singleProduct
          ? { ...singleProduct, quantity: containedItem.quantity }
          : null;
      })
      .filter(Boolean) as CartItem[];
  }
});

const addToCart = (productToAdd: Product) => {
  cartStore.addItem(productToAdd);
};
</script>

<style scoped>
/* Add any specific styles for this page here */
</style>
