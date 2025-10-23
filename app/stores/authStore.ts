import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";
import type { User } from "~/types/auth";
import { userService } from "~/services/userService";



const AUTH_STORAGE_KEY = "eternal-love-auth";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(null);
  const isLoggedIn = ref<boolean>(false);

  function init() {
    if (process.client) {
      const savedState = localStorage.getItem(AUTH_STORAGE_KEY);
      if (savedState) {
        const { user: savedUser, isLoggedIn: savedIsLoggedIn } =
          JSON.parse(savedState);
        user.value = savedUser;
        isLoggedIn.value = savedIsLoggedIn;
      }
    }
  }

  watch(
    () => ({ user: user.value, isLoggedIn: isLoggedIn.value }),
    (state) => {
      if (process.client) {
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(state));
      }
    },
    { deep: true }
  );

  const currentUser = computed(() => user.value);
  const isAuthenticated = computed(() => isLoggedIn.value);

  async function login(email: string) {
    const fetchedUser = await userService.getFakeUser();
    if (fetchedUser && fetchedUser.email === email) {
      user.value = fetchedUser;
      isLoggedIn.value = true;
      return true;
    }
    user.value = null;
    isLoggedIn.value = false;
    return false;
  }

  async function register(userData: Omit<User, "id">, password:string) {
    const newUser: User = { id: `user-${Date.now()}`, ...userData };
    user.value = newUser;
    isLoggedIn.value = true;
    return true;
  }

  function logout() {
    user.value = null;
    isLoggedIn.value = false;
  }

  return {
    user,
    isLoggedIn,
    currentUser,
    isAuthenticated,
    login,
    register,
    logout,
    init,
  };
});
