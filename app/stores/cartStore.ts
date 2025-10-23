import { defineStore } from "pinia";
import type { Product } from "~/types/product";
import type { CartItem } from "~/types/order";

interface CartState {
  items: CartItem[];
}

export const useCartStore = defineStore("cart", {
  state: (): CartState => ({
    items: [],
  }),
  actions: {
    addItem(product: Product) {
      const existingItem = this.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
    },
    removeItem(productId: string) {
      this.items = this.items.filter((item) => item.id !== productId);
    },
    updateItemQuantity(productId: string, quantity: number) {
      const item = this.items.find((item) => item.id === productId);
      if (item) {
        if (quantity > 0) {
          item.quantity = quantity;
        } else {
          this.removeItem(productId);
        }
      }
    },
    clearCart() {
      this.items = [];
    },
  },
  getters: {
    cartItems: (state) => state.items,
    cartTotal: (state) =>
      state.items.reduce(
        (total, item) => total + +item.price * item.quantity,
        0
      ),
    cartItemCount: (state) =>
      state.items.reduce((count, item) => count + item.quantity, 0),
  },
});
