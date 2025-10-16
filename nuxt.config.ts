import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '~assets': '~/app/assets',
      }
    }
  },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    defaultLocale: "fr",
    locales: [{ code: "fr", name: "French", file: "fr.json" }],
  },
});
