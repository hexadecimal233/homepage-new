import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  ssr: false, // This is Client Side Only
  vite: { plugins: [tailwindcss()] },
  modules: ["@nuxt/icon", "@nuxt/image", "@nuxt/ui"],
  app: {
    head: {
      charset: "utf-8",
      title: "Nuxt Template page",
      meta: [
        {
          name: "description",
          content: "The nuxt template page",
        },
        {
          name: "keywords",
          content: "Keywordd 1, Keywordd 2, Keywordd 3",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/icon",
          href: "/favicon.ico",
        },
        {
          //rel: "stylesheet",
          //href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",
        },
      ],
    },
  },
})