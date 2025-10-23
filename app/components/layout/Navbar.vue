<template>
  <header
    class="bg-warm-ivory/80 backdrop-blur-lg fixed top-0 w-full z-50 border-b border-blush-nude"
  >
    <div class="container mx-auto flex justify-between items-center px-6 h-20">
      <!-- Logo -->
      <div class="text-3xl font-serif text-secondary">
        <NuxtLink to="/">
          Eternal Love
        </NuxtLink>
      </div>

      <!-- Navigation -->
      <nav class="hidden md:flex">
        <ul class="flex space-x-8 items-center text-secondary">
          <li>
            <NuxtLink
              to="/products"
              class="hover:text-primary transition-colors"
            >
              Shop
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/customize-box"
              class="hover:text-primary transition-colors"
            >
              Customize Box
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="#"
              class="hover:text-primary transition-colors"
            >
              Collections
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="#"
              class="hover:text-primary transition-colors"
            >
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="#"
              class="hover:text-primary transition-colors"
            >
              Contact
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Actions -->
      <div class="flex items-center space-x-6 text-secondary">
        <NuxtLink class="hover:text-primary transition-colors">
          <Icon
            name="uil:search"
            class="h-6 w-6"
          />
        </NuxtLink>
      
        <template v-if="authStore.isAuthenticated">
          <NuxtLink
            to="/account/profile"
            class="hover:text-primary transition-colors"
          >
            <Icon
              name="uil:user"
              class="h-6 w-6"
            />
          </NuxtLink>
        </template>
        <template v-else>
          <NuxtLink
            to="/auth/login"
            class="hover:text-primary transition-colors text-sm md:text-base"
          >
            Login
          </NuxtLink>
          <span class="text-gray-400 hidden md:inline">|</span>
          <NuxtLink
            to="/auth/register"
            class="hover:text-primary transition-colors text-sm md:text-base hidden md:inline"
          >
            Register
          </NuxtLink>
        </template>
      
        <!-- Cart Dropdown -->
        <div
          ref="cartDropdownRef"
          class="relative"
        >
          <CustomButton
            variant="outline"
            size="medium"
            class="hover:text-primary transition-colors flex items-center"
            @click="toggleCartDropdown"
          >
            <Icon
              name="uil:shopping-cart"
              class="h-6 w-6"
            />

            <span
              v-if="cartStore.cartItemCount > 0"
              class="ml-1 text-xs bg-pink-500 text-white rounded-full px-2 py-1"
            >
              {{ cartStore.cartItemCount }}
            </span>
          </CustomButton>

          <div
            v-if="isCartDropdownOpen"
            class="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-20 min-h-[200px] flex flex-col"
          >
            <h3
              class="text-lg font-semibold px-4 py-2 border-b border-blush-nude text-secondary"
            >
              Your Cart
            </h3>

            <div
              v-if="cartStore.cartItemCount === 0"
              class="px-4 py-4 text-gray-600 text-center grow flex items-center justify-center"
            >
              Your cart is empty.
            </div>

            <div
              v-else
              class="grow flex flex-col"
            >
              <ul class="grow overflow-y-auto max-h-60">
                <li
                  v-for="item in cartStore.cartItems"
                  :key="item.id"
                  class="flex items-center justify-between px-4 py-3 border-b border-blush-nude last:border-b-0"
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
                        ${{ item.price }}
                      </p>
                    </div>
                  </div>

                  <div class="flex items-center space-x-2">
                    <CustomButton
                      variant="danger"
                      size="small"
                      class="text-red-500 hover:text-red-700 ml-2"
                      @click="cartStore.removeItem(item.id)"
                    >
                      Remove
                    </CustomButton>
                  </div>
                </li>
              </ul>

              <div
                class="border-t border-blush-nude pt-4 flex justify-between items-center font-bold text-xl text-secondary px-4 py-2"
              >
                <span>Total:</span>

                <span>${{ cartStore.cartTotal.toFixed(2) }}</span>
              </div>

              <div class="px-4 py-2">
                <NuxtLink
                  to="/checkout"
                  class="block w-full bg-pink-500 text-white text-center py-2 rounded-md hover:bg-pink-600 transition-colors"
                >
                  View Cart
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

import { useCartStore } from "~/stores/cartStore";
import { useAuthStore } from "~/stores/authStore";

const cartStore = useCartStore();
const authStore = useAuthStore();

const isCartDropdownOpen = ref(false);

const cartDropdownRef = ref<HTMLElement | null>(null);

const toggleCartDropdown = () => {
  isCartDropdownOpen.value = !isCartDropdownOpen.value;
};

const handleClickOutside = (event: MouseEvent) => {
  if (
    cartDropdownRef.value &&
    !cartDropdownRef.value.contains(event.target as Node)
  ) {
    isCartDropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
