import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { User } from "~/types/auth";
import { userService } from "~/services/userService";

interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
}

const AUTH_STORAGE_KEY = "eternal-love-auth";

function loadAuthStateFromLocalStorage(): AuthState {
  console.log("starting auth store");

  if (typeof localStorage !== "undefined") {
    console.log(
      "reading from local storage, ",
      localStorage.getItem(AUTH_STORAGE_KEY)
    );
    const savedState = localStorage.getItem(AUTH_STORAGE_KEY);
    if (savedState) {
      return JSON.parse(savedState);
    }
  }
  return { user: null, isLoggedIn: false };
}

function saveAuthStateToLocalStorage(state: AuthState) {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(state));
  }
}

export const useAuthStore = defineStore("auth", () => {
  const initialState = loadAuthStateFromLocalStorage();
  const user = ref<User | null>(initialState.user);
  const isLoggedIn = ref<boolean>(initialState.isLoggedIn);

  const currentUser = computed(() => user.value);
  const isAuthenticated = computed(() => isLoggedIn.value);

  async function login(email: string) {
    const fetchedUser = await userService.getFakeUser();
    if (fetchedUser && fetchedUser.email === email) {
      user.value = fetchedUser;
      isLoggedIn.value = true;
      saveAuthStateToLocalStorage({
        user: user.value,
        isLoggedIn: isLoggedIn.value,
      });
      return true;
    }
    user.value = null;
    isLoggedIn.value = false;
    saveAuthStateToLocalStorage({
      user: user.value,
      isLoggedIn: isLoggedIn.value,
    });
    return false;
  }

  async function register(userData: Omit<User, "id">) {
    const newUser: User = { id: `user-${Date.now()}`, ...userData };
    user.value = newUser;
    isLoggedIn.value = true;
    saveAuthStateToLocalStorage({
      user: user.value,
      isLoggedIn: isLoggedIn.value,
    });
    return true;
  }

  function logout() {
    user.value = null;
    isLoggedIn.value = false;
    saveAuthStateToLocalStorage({
      user: user.value,
      isLoggedIn: isLoggedIn.value,
    });
  }

  return {
    user,
    isLoggedIn,
    currentUser,
    isAuthenticated,
    login,
    register,
    logout,
  };
});
