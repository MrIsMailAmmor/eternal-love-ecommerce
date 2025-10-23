import type { User } from '~/types/auth';

export const userService = {
  async getFakeUser(): Promise<User | null> {
    try {
      const response = await fetch('/api/user.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Failed to fetch fake user:", error);
      return null;
    }
  },
};
