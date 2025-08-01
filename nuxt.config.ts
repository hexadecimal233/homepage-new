import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: { plugins: [tailwindcss()] },
  modules: ["@nuxt/icon", "@nuxt/image", "@nuxt/ui"],
  runtimeConfig: {
    public: {
      buildTime: process.env.BUILD_TIME || new Date().toISOString(),
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en-US",
      },
      charset: "utf-8",
      title: "Hexzii ｡+..｡ﾟ☆",
      meta: [
        {
          name: "description",
          content: "Hexzii's personal profile website.",
        },
        {
          name: "keywords",
          content: "Homepage, Profile, hexadecimal233, Hexzii⭐, 盒沐子",
        },
        // Open Graph Meta Tags
        {
          property: "og:title",
          content: "Hexzii ｡+..｡ﾟ☆",
        },
        {
          property: "og:description",
          content: "Hexzii's personal profile website.",
        },
        {
          property: "og:image",
          content:
            "https://gravatar.loli.net/avatar/daca850545a454e39660992d1163e88e?size=256&cache=1718432418567",
        },
        {
          property: "og:url",
          content: "https://hexzii.com/",
        },
        {
          property: "og:type",
          content: "website",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "https://gravatar.loli.net/avatar/daca850545a454e39660992d1163e88e?size=256&cache=1718432418567",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Lilita+One&display=swap",
        },
      ],
    },
  },
})
