<template>
  <section class="relative bg-warm-ivory py-24 overflow-hidden">
    <div class="container mx-auto grid md:grid-cols-2 gap-12 items-center">
      <!-- Text and Form -->
      <div class="relative z-10 px-6 text-left">
        <h2 class="text-4xl font-serif text-secondary mb-4">
          Stay close to what matters.
        </h2>
        <p class="text-secondary mb-8 text-lg">
          Be the first to discover new collections, stories, and gifts made with
          love.
        </p>

        <form
          class="flex flex-col sm:flex-row items-start gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            class="w-full sm:w-auto flex-1 rounded-full border border-primary bg-white/80 text-secondary px-6 py-3 placeholder-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary"
          >
          <button
            type="submit"
            class="bg-secondary text-warm-ivory font-medium rounded-full px-8 py-3 hover:bg-secondary/90 transition-all shadow-md flex items-center gap-2"
          >
            <span>Join with Love</span>
            <Icon name="uil:envelope-heart" />
          </button>
        </form>
      </div>

      <!-- Illustration -->
      <div class="relative hidden md:block">
        <HeartPattern
          main-color="#6B1E1E"
          class="absolute opacity-20 -top-24 -right-32 z-0"
          height="400px"
        />
        <WomenHoldingHeart
          main-color="#6B1E1E"
          class="relative z-10"
        />
      </div>
    </div>
  </section>
</template>
