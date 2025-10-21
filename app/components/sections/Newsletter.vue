<template>
  <section
    class="relative bg-gradient-to-b from-[#fff8f2] to-[#fbeee8] py-24 text-center overflow-hidden"
  >
    <div class="relative z-10 max-w-2xl mx-auto px-6">
      <h2 class="text-4xl font-serif text-[#4a3b2d] mb-4">
        Stay close to what matters.
      </h2>
      <p class="text-[#7c6e64] mb-8 text-lg">
        Be the first to discover new collections, stories, and gifts made with
        love.
      </p>

      <form class="flex flex-col sm:flex-row items-center gap-4 justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          class="w-full sm:w-auto flex-1 rounded-full border border-[#d4af37] bg-white/80 text-[#4a3b2d] px-6 py-3 placeholder-[#b8a89b] focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
        />
        <button
          type="submit"
          class="bg-[#d4af37] text-white font-medium rounded-full px-8 py-3 hover:bg-[#c19d32] transition-all shadow-md hover:shadow-gold-glow"
        >
          Join with Love ❤️
        </button>
      </form>
    </div>
  </section>
</template>

<style>
@layer utilities {
  .shadow-gold-glow {
    box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
  }
}
</style>
