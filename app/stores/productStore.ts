import { defineStore } from 'pinia';
import { productService } from '~/services/productService';
import type { Product } from '~/types/product';

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export const useProductStore = defineStore('product', {
  state: (): ProductState => ({
    products: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchProducts() {
      this.loading = true;
      this.error = null;
      try {
        this.products = await productService.getProducts();
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'An unknown error occurred';
      } finally {
        this.loading = false;
      }
    },
  },
  getters: {
    allProducts: (state) => state.products,
    productsForHer: (state) => state.products.filter(product => product.category === 'For Her'),
    productsForHim: (state) => state.products.filter(product => product.category === 'For Him'),
    productsForBirthday: (state) => state.products.filter(product => product.category === 'Birthday'),
  },
});
