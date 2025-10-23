<template>
  <footer class="bg-warm-ivory pt-16 pb-8 mt-16 text-rich-brown">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- About Section -->
        <div class="col-span-1 md:col-span-1">
          <h3 class="text-lg font-semibold mb-4">
            Eternal Love
          </h3>
          <p class="text-sm">
            Crafting memories with timeless gifts that celebrate love's eternal
            flame.
          </p>
        </div>

        <!-- Shop Links -->
        <div>
          <h4 class="font-semibold mb-4">
            Shop
          </h4>
          <ul class="space-y-2 text-sm">
            <li>
              <a
                href="#"
                class="hover:text-burgundy-red"
              >All Collections</a>
            </li>
            <li>
              <a
                href="#"
                class="hover:text-burgundy-red"
              >For Her</a>
            </li>
            <li>
              <a
                href="#"
                class="hover:text-burgundy-red"
              >For Him</a>
            </li>
            <li>
              <a
                href="#"
                class="hover:text-burgundy-red"
              >Birthdays</a>
            </li>
          </ul>
        </div>

        <!-- Customer Service Links -->
        <div>
          <h4 class="font-semibold mb-4">
            Customer Service
          </h4>
          <ul class="space-y-2 text-sm">
            <li>
              <a
                href="#"
                class="hover:text-burgundy-red"
              >Contact Us</a>
            </li>
            <li>
              <a
                href="#"
                class="hover:text-burgundy-red"
              >FAQs</a>
            </li>
            <li>
              <a
                href="#"
                class="hover:text-burgundy-red"
              >Shipping & Returns</a>
            </li>
            <li>
              <a
                href="#"
                class="hover:text-burgundy-red"
              >Privacy Policy</a>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h4 class="font-semibold mb-4">
            Stay Connected
          </h4>
          <p class="text-sm mb-2">
            Join our newsletter for exclusive offers and new collections.
          </p>
          <form class="flex">
            <input
              type="email"
              placeholder="Your email"
              class="w-full px-4 py-2 border border-champagne-gold rounded-l-md focus:outline-none focus:ring-2 focus:ring-burgundy-red"
            >
            <CustomButton
              type="submit"
              variant="primary"
              size="medium"
              class="bg-burgundy-red text-white px-4 py-2 rounded-r-md hover:bg-opacity-90"
            >
              Sign Up
            </CustomButton>
          </form>
        </div>
      </div>

      <!-- Social Media and Copyright -->
      <div
        class="border-t border-champagne-gold pt-8 flex flex-col md:flex-row justify-between items-center text-center"
      >
        <div class="flex justify-center space-x-4 mb-4 md:mb-0">
          <a
            href="#"
            class="hover:text-burgundy-red"
          >
            <Icon
              name="uil:facebook-f"
              class="h-6 w-6"
            />
          </a>
          <a
            href="#"
            class="hover:text-burgundy-red"
          >
            <Icon
              name="uil:instagram"
              class="h-6 w-6"
            />
          </a>
          <a
            href="#"
            class="hover:text-burgundy-red"
          >
            <Icon
              name="uil:twitter"
              class="h-6 w-6"
            />
          </a>
        </div>
        <p class="text-sm">
          &copy; 2025 Eternal Love. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
