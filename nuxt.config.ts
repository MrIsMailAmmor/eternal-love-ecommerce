import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '~components': '~/app/components',
        '~features': '~/app/features',
        '~composables': '~/app/composables',
        '~plugins': '~/app/plugins',
        '~types': '~/app/types',
        '~assets': '~/app/assets',
        '~public': '~/public',
      }
    }
  },
modules: ['@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'fr',
    locales: [
      { code: 'fr', name: 'French', file: 'fr.json' },
    ]
  }
})