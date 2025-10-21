<script setup lang="ts">
import FeaturedCard from "~/components/reusables/FeaturedCard.vue";
</script>
<template>
  <section class="py-16 bg-primary-light relative">
    <HeartPattern
      main-color="#6B1E1E"
      class="absolute opacity-50 top-0 left-0 z-1"
      height="fit-content"
    />
    <CoupleTogether
      main-color="#6B1E1E"
      class="absolute opacity-50 bottom-0 right-0 z-1"
    />
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-serif text-warm-ivory mb-8">
        Thoughtful Gestures of Affection
      </h2>
      <div class="grid md:grid-cols-3 gap-8 px-4 justify-center">
        <FeaturedCard
          title="Anniversary"
          description="Eternalize Your Moment"
          image="/birthday.png"
          class="z-10"
          icon="uil:gift"
        />
        <FeaturedCard
          title="Birthday"
          description="Celebrate with Love"
          image="/forHer.png"
          class="z-10"
          icon="uil:cake"
        />
        <FeaturedCard
          title="Get Well Soon"
          description="Celebrate with Love"
          image="/forHim.png"
          class="z-10"
          icon="uil:heart"
        />
      </div>
    </div>
  </section>
</template>
