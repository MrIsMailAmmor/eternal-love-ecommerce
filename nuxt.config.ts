import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&family=Lato:wght@400;700&display=swap",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  components: [
    "~/components/reusables",
    "~/components/sections",
    "~/components/illustrations",
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "~assets": "~/app/assets",
      },
    },
  },
  modules: ["@nuxtjs/i18n", "@nuxt/image", "@nuxt/eslint", "@nuxt/icon"],
  i18n: {
    defaultLocale: "fr",
    locales: [{ code: "fr", name: "French", file: "fr.json" }],
  },
  image: {
    dir: "assets/images",
    formats: ["webp", "png", "jpg"],
    quality: 80,
  },
  icon: {
    mode: "css",
    cssLayer: "base",
  },
});
