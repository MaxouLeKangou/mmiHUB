import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devServer: {
    host: "0.0.0.0",
    port: 3000
  },

  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],

  runtimeConfig: {
    public: {
      DEVELOPMENT_BACKEND_KEY: process.env.DEVELOPMENT_BACKEND_KEY,
      PRODUCTION_BACKEND_KEY: process.env.PRODUCTION_BACKEND_KEY
    }
  },

  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  modules: [
    "@nuxt/ui",
    "@nuxtjs/robots",
    "@nuxtjs/seo",
    "@nuxt/image"
  ]
});