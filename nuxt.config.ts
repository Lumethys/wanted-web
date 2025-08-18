// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},

    modules: [
        '@nuxt/ui',
        '@nuxt/eslint',
        '@nuxt/image',
        '@nuxt/scripts',
        '@nuxtjs/i18n',
    ],

    css: ['~/assets/css/main.css'],

    i18n: {
        defaultLocale: 'en',
        locales: [
            {
                code: 'en',
                name: 'English',
                file: 'en.json',
            },
            {
                code: 'vi',
                name: 'Tiếng Việt',
                file: 'vi.json',
            },
        ],
    },

    image: {
        dir: 'assets'
    },

    compatibilityDate: '2025-07-16'
})