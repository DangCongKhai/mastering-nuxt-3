import vsharp from 'vite-plugin-vsharp';

export default defineNuxtConfig({
  runtimeConfig: {
    stripeSecret: '',
    stripeWebhookSecret: '',
    public: {
      stripeKey: '',
  
    },
    supabase : {
      url : process.env.SUPABASE_URL,
      key : process.env.SUPABASE_KEY
    }
  },

  nitro: {
    prerender: {
      routes: ['/landing'],
    },
  },

  vite: {
    plugins: [vsharp()],
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/supabase',
    '@pinia/nuxt',
  ],

  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: ['/*'], // We implement our own auth behaviour in the auth middleware
    },
  },

  compatibilityDate: '2025-01-24',
});