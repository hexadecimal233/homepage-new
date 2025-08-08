<template>
  <div
    class="mx-auto flex w-full max-w-4xl flex-col rounded-2xl bg-white/10 text-white shadow-lg backdrop-blur-md lg:flex-row">
    <div class="space-y-2 px-6 py-8 lg:max-w-[70%]">
      <ProfileCard />

      <hr class="divider" />

      <p class="section">About me</p>
      <p class="text-lg">yo</p>

      <p class="section">Links</p>
      <LinksSection />

      <p class="section">Languages</p>
      <CardGroup
        :items="[
          { icon: 'twemoji:flag-united-states', text: 'English' },
          { icon: 'twemoji:flag-china', text: '中文' },
        ]" />

      <p class="section">Operating System</p>
      <CardGroup
        :items="[
          {
            icon: 'logos:microsoft-windows-icon',
            text: 'Windows 11',
            subtext: 'PC',
          },
          { icon: 'logos:android-icon', text: 'Android', subtext: 'MIUI' },
          { icon: 'logos:manjaro', text: 'Linux', subtext: 'Manjaro' },
        ]" />

      <p class="section">Creativity Gear</p>
      <CardGroup
        :items="[
          {
            icon: 'simple-icons:pioneerdj',
            text: 'Pioneer',
            subtext: 'DDJ-FLX4',
          },
          { icon: 'simple-icons:sony', text: 'Sony', subtext: 'A-6700' },
          { icon: 'simple-icons:wacom', text: 'Wacom', subtext: 'CTL-472' },
          {
            image: '/assets/img/arturia.png',
            text: 'Arturia',
            subtext: 'Minilab 3',
          },
        ]" />

      <p class="section">Projects</p>
      <ProjectList />

      <p class="section">Store</p>
      <DonationSection />
    </div>

    <Sidebar />
  </div>
</template>

<script lang="ts" setup>
import ProfileCard from "~/components/home/ProfileCard.vue"
import CardGroup from "~/components/home/CardGroup.vue"
import ProjectList from "~/components/home/ProjectList.vue"
import Sidebar from "~/components/sidebar/Sidebar.vue"
import LinksSection from "~/components/home/LinksSection.vue"
import DonationSection from "~/components/home/DonationSection.vue"
</script>

<style scoped>
@import "tailwindcss";
@import "~/assets/css/main.css";

.section {
  @apply theme-font my-6 border-l-6 border-l-pink-400 px-4 text-3xl;
}

.sidebar {
  @apply my-4 overflow-hidden border-gray-700 p-4 lg:border-l-2;
}
</style>
