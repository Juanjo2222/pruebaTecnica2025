// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
  ],
  runtimeConfig: {
    twitchClient: process.env.TWITCH_CLIENT_ID,
    twitchSecret: process.env.TWITCH_CLIENT_SECRET,
    twitchRedirect: process.env.TWITCH_REDIRECT_URI,
    public: {
        twitchClient: process.env.TWITCH_CLIENT_ID,
    },
},
})