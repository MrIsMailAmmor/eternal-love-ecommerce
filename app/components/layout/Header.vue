<template>
  <header
    class="bg-warm-ivory/80 backdrop-blur-lg fixed top-0 w-full z-50 border-b border-blush-nude"
  >
    <div
      class="container mx-auto flex justify-between items-center px-6 h-20"
    >
      <!-- Logo -->
      <div class="text-3xl font-serif text-secondary">
        <a href="/">Eternal Love</a>
      </div>

      <!-- Navigation -->
      <nav class="hidden md:flex">
        <ul class="flex space-x-8 items-center text-secondary">
          <li>
            <a href="/products" class="hover:text-primary transition-colors"
              >Shop</a
            >
          </li>
          <li>
            <a href="#" class="hover:text-primary transition-colors"
              >Collections</a
            >
          </li>
          <li>
            <a href="#" class="hover:text-primary transition-colors">About</a>
          </li>
          <li>
            <a href="#" class="hover:text-primary transition-colors"
              >Contact</a
            >
          </li>
        </ul>
      </nav>

      <!-- Actions -->
      <div class="flex items-center space-x-6 text-secondary">
        <a href="#" class="hover:text-primary transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </a>
        <a href="/account/profile" class="hover:text-primary transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </a>
        <a href="#" class="hover:text-primary transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>
