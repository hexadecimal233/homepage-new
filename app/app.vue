<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
const imgLink =
  "https://gravatar.loli.net/avatar/daca850545a454e39660992d1163e88e?size=256&cache=1718432418567"

useSeoMeta({
  description: "Hexzii's personal profile website.",
  ogTitle: "Hexzii ｡+..｡ﾟ☆",
  ogDescription: "Hexzii's personal profile website.",
  ogImage: imgLink,
  ogUrl: "https://nichijou.moe",
  twitterTitle: "Hexzii ｡+..｡ﾟ☆",
  twitterDescription: "Hexzii's personal profile website.",
  twitterImage: imgLink,
  twitterCard: "summary_large_image",
  keywords: "Homepage, Profile, hexadecimal233, Hexzii⭐, 盒沐子",
})

useHead({
  title: "Hexzii ｡+..｡ﾟ☆",
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Lilita+One&display=swap",
    },
  ],
})
</script>
