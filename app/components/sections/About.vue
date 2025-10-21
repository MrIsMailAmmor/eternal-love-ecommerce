<template>
  <section class="bg-blush-nude py-20 relative">
    <div
      class="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4"
    >
      <!-- Image -->
      <div class="md:w-1/2">
        <NuxtImg
          src="/forHer.png"
          alt="Eternal Love gift set"
          class="rounded-lg shadow-lg object-cover w-full h-full"
        />
      </div>

      <!-- Text -->
      <div class="md:w-1/2">
        <h2 class="text-4xl font-serif text-secondary mb-4">
          Our Philosophy
        </h2>
        <div class="w-20 h-1 bg-primary mb-6" />
        <p class="text-lg text-secondary leading-relaxed mb-6">
          At
          <span class="font-serif text-2xl text-primary">Eternal Love</span>,
          every gift tells a story — of connection, warmth, and timeless
          affection. We believe in crafting moments that linger in hearts,
          celebrating love in its most sincere form.
        </p>
        <p class="text-md text-secondary">
          From delicate candles to beautifully curated gift boxes, each creation
          is designed to speak the language of emotion and make your loved ones
          feel truly cherished.
        </p>
      </div>
    </div>
    <div class="absolute opacity-50 right-0 bottom-0">
      <FallInLove
        main-color="#6B1E1E"
        width="100%"
        height="100%"
      />
      <!-- <HeartPattern mainColor="#ff6f91" width="100%" height="100%"/> -->
    </div>
  </section>
</template>
