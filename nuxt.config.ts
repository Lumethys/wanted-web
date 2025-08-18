// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxtjs/i18n',
  ],

  css: ['~/assets/css/main.css'],

  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
      },
      {
        code: 'vi',
        name: 'Tiếng Việt',
      },
    ],
    defaultLocale: 'vi',
  },

  compatibilityDate: '2025-07-16'
})