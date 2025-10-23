<template>
  <section class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">
      All Products
    </h1>

    <div class="flex flex-col md:flex-row gap-8">
      <!-- Filter Section -->
      <aside class="md:w-1/4">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4">
            Filters
          </h2>
          <div class="mb-4">
            <label
              for="search"
              class="block text-sm font-medium text-gray-700"
            >Search by Name</label>
            <input
              id="search"
              v-model="searchQuery"
              type="text"
              name="search"
              placeholder="e.g., Necklace"
              class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
          </div>
          <div class="mb-4">
            <label
              for="category"
              class="block text-sm font-medium text-gray-700"
            >Category</label>
            <select
              id="category"
              v-model="selectedCategory"
              name="category"
              class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="All">
                All
              </option>
              <option value="For Her">
                For Her
              </option>
              <option value="For Him">
                For Him
              </option>
              <option value="Birthday">
                Birthday
              </option>
            </select>
          </div>
          <div class="mb-4">
            <label
              for="price"
              class="block text-sm font-medium text-gray-700"
            >Price Range</label>
            <input
              id="price"
              v-model.number="priceRange"
              type="range"
              name="price"
              min="0"
              max="300"
              class="mt-1 block w-full"
            >
            <div class="flex justify-between text-sm text-gray-600">
              <span>$0</span>
              <span>${{ priceRange }}+</span>
            </div>
          </div>
          <div class="mb-4">
            <label
              for="sort"
              class="block text-sm font-medium text-gray-700"
            >Sort By</label>
            <select
              id="sort"
              v-model="sortBy"
              name="sort"
              class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="default">
                Default
              </option>
              <option value="price-asc">
                Price: Low to High
              </option>
              <option value="price-desc">
                Price: High to Low
              </option>
              <option value="name-asc">
                Name: A-Z
              </option>
              <option value="name-desc">
                Name: Z-A
              </option>
            </select>
          </div>
          <CustomButton
            variant="primary"
            size="medium"
            class="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600"
            @click="applyFilters"
          >
            Apply Filters
          </CustomButton>
        </div>
      </aside>

      <!-- Product Listing Section -->
      <div class="md:w-3/4">
        <div
          v-if="productStore.loading"
          class="text-center text-gray-500"
        >
          Loading products...
        </div>
        <div
          v-else-if="productStore.error"
          class="text-center text-red-500"
        >
          Error: {{ productStore.error }}
        </div>
        <div
          v-else-if="filteredProducts.length === 0"
          class="text-center text-gray-500"
        >
          No products found matching your criteria.
        </div>
        <div
          v-else
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <FeaturedCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProductStore } from "~/stores/productStore";
const productStore = useProductStore();

const selectedCategory = ref("All");
const priceRange = ref(300);
const searchQuery = ref("");
const sortBy = ref("default");

const filteredProducts = computed(() => {
  let products = productStore.allProducts;

  if (selectedCategory.value !== "All") {
    products = products.filter(
      (product) => product.category === selectedCategory.value
    );
  }

  if (searchQuery.value) {
    products = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  products = products.filter((product) => +product.price <= priceRange.value);

  // Sorting logic
  if (sortBy.value === "price-asc") {
    products.sort((a, b) => +a.price - +b.price);
  } else if (sortBy.value === "price-desc") {
    products.sort((a, b) => +b.price - +a.price);
  } else if (sortBy.value === "name-asc") {
    products.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy.value === "name-desc") {
    products.sort((a, b) => b.name.localeCompare(a.name));
  }

  return products;
});

const applyFilters = () => {
  // Filters are applied reactively via computed property, but this function can be used for future complex filter logic or API calls
  console.log("Applying filters...");
};

onMounted(() => {
  productStore.fetchProducts();
});
</script>

<style scoped>
/* Add any specific styles for this page here */
</style>
