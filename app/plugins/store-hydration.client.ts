import { useAuthStore } from '~/stores/authStore';
import { useCartStore } from '~/stores/cartStore';

export default defineNuxtPlugin(() => {
  const authStore = useAuthStore();
  const cartStore = useCartStore();

  authStore.init();
  cartStore.init();
});
