<template>
  <section class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8 text-center text-secondary">
      Customize Your Box
    </h1>

    <div
      v-if="productStore.loading"
      class="text-center text-gray-500 py-10"
    >
      Loading products...
    </div>
    <div
      v-else-if="productStore.error"
      class="text-center text-red-500 py-10"
    >
      Error: {{ productStore.error }}
    </div>
    <div
      v-else
      class="flex flex-col lg:flex-row gap-10"
    >
      <!-- Available Products Section -->
      <div class="lg:w-2/3 bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-semibold mb-6 text-primary">
          Available Items
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div
            v-for="product in singleProducts"
            :key="product.id"
            class="bg-warm-ivory p-4 rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl"
          >
            <NuxtImg
              :src="product.image"
              :alt="product.name"
              class="w-36 h-36 object-cover mb-4 rounded-full border-2 border-blush-nude"
            />
            <h3 class="font-serif text-xl mb-1 text-secondary">
              {{ product.name }}
            </h3>
            <p class="text-gray-700 mb-3">
              ${{ product.price }}
            </p>
            <div class="flex items-center mt-auto">
              <CustomButton
                variant="primary"
                size="small"
                class="text-white px-4 py-2 rounded-md transition-colors text-sm"
                :class="{
                  'bg-pink-500 hover:bg-pink-600': !(
                    boxItems.length >= 4 ||
                    getProductQuantityInBox(product.id) > 0
                  ),
                  'bg-gray-400 cursor-not-allowed':
                    boxItems.length >= 4 ||
                    getProductQuantityInBox(product.id) > 0,
                }"
                :disabled="
                  boxItems.length >= 4 ||
                    getProductQuantityInBox(product.id) > 0
                "
                @click="addItemToBox(product)"
              >
                Add to Box
              </CustomButton>
            </div>
          </div>
        </div>
      </div>

      <!-- Custom Box Summary -->
      <aside class="lg:w-1/3">
        <div
          class="bg-white p-6 rounded-lg shadow-lg sticky top-24 min-h-[400px] flex flex-col"
        >
          <h2 class="text-2xl font-semibold mb-6 text-primary">
            Your Custom Box ({{ boxItems.length }} / 4 Items)
          </h2>
          <div
            v-if="boxItems.length === 0"
            class="text-gray-600 mb-4 text-center py-8 border-dashed border-gray-300 border-2 rounded grow flex items-center justify-center"
          >
            <p>Start building your perfect gift box!</p>
          </div>
          <ul
            v-else
            class="mb-4 space-y-3 grow"
          >
            <li
              v-for="item in boxItems"
              :key="item.id"
              class="flex items-center justify-between py-2 border-b border-blush-nude last:border-b-0"
            >
              <div class="flex items-center">
                <NuxtImg
                  :src="item.image"
                  :alt="item.name"
                  class="w-14 h-14 object-cover rounded-md mr-3"
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
              <CustomButton
                variant="danger"
                size="small"
                class="text-red-500 hover:text-red-700 transition-colors text-sm"
                @click="removeItemFromBox(item.id)"
              >
                Remove
              </CustomButton>
            </li>
          </ul>
          <div
            class="border-t border-blush-nude pt-4 flex justify-between items-center font-bold text-xl text-secondary mt-auto"
          >
            <span>Total:</span>
            <span>${{ customBoxTotalPrice.toFixed(2) }}</span>
          </div>
          <CustomButton
            variant="primary"
            size="large"
            class="w-full bg-pink-500 text-white py-3 px-6 rounded-md hover:bg-pink-600 transition-colors text-lg mt-6"
            :disabled="boxItems.length === 0"
            @click="addCustomBoxToCart"
          >
            Add Custom Box to Cart
          </CustomButton>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useProductStore } from "~/stores/productStore";
import { useCartStore } from "~/stores/cartStore";
import type { Product } from "~/types/product";
import type { CartItem } from "~/types/order";
const productStore = useProductStore();
const cartStore = useCartStore();

const boxItems = ref<CartItem[]>([]);

onMounted(() => {
  productStore.fetchProducts();
});

const singleProducts = computed(() => {
  return productStore.allProducts.filter(
    (product) => product.type === "single"
  );
});

const customBoxTotalPrice = computed(() => {
  return boxItems.value.reduce(
    (total, item) => total + +item.price * item.quantity,
    0
  );
});

const getProductQuantityInBox = computed(() => (productId: string) => {
  const item = boxItems.value.find((item) => item.id === productId);
  return item ? item.quantity : 0;
});

const addItemToBox = (product: Product) => {
  const existingItemIndex = boxItems.value.findIndex(
    (item) => item.id === product.id
  );

  if (existingItemIndex !== -1) {
    alert(
      `'${product.name}' is already in your custom box. You can only add one of each unique item.`
    );
    return;
  } else {
    // Add new product to box if limit not reached
    if (boxItems.value.length < 4) {
      boxItems.value.push({ ...product, quantity: 1 });
    } else {
      alert("Maximum 4 unique items allowed in the custom box.");
      return;
    }
  }
};

const removeItemFromBox = (productId: string) => {
  boxItems.value = boxItems.value.filter((item) => item.id !== productId);
};

const addCustomBoxToCart = () => {
  if (boxItems.value.length === 0) {
    alert("Please add items to your custom box before adding to cart.");
    return;
  }

  const customBoxProduct: Product = {
    id: `custom-box-${Date.now()}`,
    name: "Custom Gift Box",
    description: "A personalized gift box created by you.",
    price: customBoxTotalPrice.value.toString(),
    image: "birthday.png", // Placeholder image for custom box
    category: "Gift Boxes",
    type: "box",
    contains: boxItems.value.map((item) => ({
      productId: item.id,
      quantity: item.quantity,
    })),
  };

  cartStore.addItem(customBoxProduct);
  boxItems.value = []; // Clear box after adding to cart
  alert("Custom Box added to cart!");
};
</script>

<style scoped>
/* Add any specific styles for this page here */
</style>
