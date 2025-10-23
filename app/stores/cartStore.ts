import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Product } from "~/types/product";
import type { CartItem } from "~/types/order";

const CART_STORAGE_KEY = "eternal-love-cart";

function loadCartFromLocalStorage(): CartItem[] {
  if (typeof localStorage !== "undefined") {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  }
  return [];
}

function saveCartToLocalStorage(cartItems: CartItem[]) {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }
}

export const useCartStore = defineStore("cart", () => {
  const items = ref<CartItem[]>(loadCartFromLocalStorage());

  const addItem = (product: Product) => {
    const existingItem = items.value.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      items.value.push({ ...product, quantity: 1 });
    }
    saveCartToLocalStorage(items.value);
  };

  const removeItem = (productId: string) => {
    items.value = items.value.filter((item) => item.id !== productId);
    saveCartToLocalStorage(items.value);
  };

  const updateItemQuantity = (productId: string, quantity: number) => {
    const item = items.value.find((item) => item.id === productId);
    if (item) {
      if (quantity > 0) {
        item.quantity = quantity;
      } else {
        removeItem(productId);
      }
    }
    saveCartToLocalStorage(items.value);
  };

  const clearCart = () => {
    items.value = [];
    saveCartToLocalStorage(items.value);
  };

  const cartItems = computed(() => items.value);
  const cartTotal = computed(() =>
    items.value.reduce((total, item) => total + +item.price * item.quantity, 0)
  );
  const cartItemCount = computed(() =>
    items.value.reduce((count, item) => count + item.quantity, 0)
  );

  return {
    items,
    addItem,
    removeItem,
    updateItemQuantity,
    clearCart,
    cartItems,
    cartTotal,
    cartItemCount,
  };
});
