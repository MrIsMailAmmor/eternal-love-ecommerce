import type { Product } from '~/types/product';

export const productService = {
  async getProducts(): Promise<Product[]> {
    try {
      const response = await fetch('/api/products.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Failed to fetch products:", error);
      return [];
    }
  },
};
