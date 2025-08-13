<!-- 主页 -->

<template>
  <UContainer
    class="flex w-full max-w-4xl flex-col rounded-2xl border-2 border-neutral-300 shadow-2xl lg:flex-row dark:border-neutral-800">
    <!-- 侧边栏三七开 -->
    <div class="space-y-4 px-4 py-8 lg:max-w-[70%]">
      <ProfileCard />

      <USeparator />

      <div class="section">
        <Icon name="lucide:user" class="mr-2 text-4xl" />
        About me
      </div>
      <div class="inline-block text-lg">
        yo im
        <pre>hexzii</pre>
      </div>

      <div class="section">
        <Icon name="lucide:link" class="mr-2 text-4xl" />
        Links
      </div>
      <LinksSection />

      <div class="section">
        <Icon name="lucide:earth" class="mr-2 text-4xl" />
        Language
      </div>
      <CardGroup
        :items="[
          { icon: 'twemoji:flag-united-states', text: 'English' },
          { icon: 'twemoji:flag-china', text: '中文' },
        ]" />

      <div class="section">
        <Icon name="lucide:monitor-cog" class="mr-2 text-4xl" />
        Operating System
      </div>
      <CardGroup
        :items="[
          { icon: 'logos:microsoft-windows-icon', text: 'Windows 11', subtext: 'PC' },
          { icon: 'logos:android-icon', text: 'Android', subtext: 'MIUI' },
          { icon: 'logos:apple', text: 'Apple', subtext: 'iOS' },
          { icon: 'logos:archlinux', text: 'Linux', subtext: 'Arch' },
          { icon: 'noto:fish-cake-with-swirl', text: 'Linux', subtext: 'Debian' },
        ]" />

      <div class="section">
        <Icon name="lucide:projector" class="mr-2 text-4xl" />
        Creativity Gear
      </div>
      <CardGroup
        :items="[
          { icon: 'simple-icons:pioneerdj', text: 'Pioneer', subtext: 'DDJ-FLX4' },
          { icon: 'simple-icons:sony', text: 'Sony', subtext: 'A-6700' },
          { icon: 'simple-icons:wacom', text: 'Wacom', subtext: 'CTL-472' },
          { image: '/assets/img/arturia.png', text: 'Arturia', subtext: 'Minilab 3' },
        ]" />

      <div class="section">
        <Icon name="mdi:bulletin-board" class="mr-2 text-4xl" />
        Projects
      </div>
      <ProjectList />

      <div class="section">
        <Icon name="lucide:store" class="mr-2 text-4xl" />
        Store
      </div>
      <DonationSection />
    </div>

    <Sidebar />
  </UContainer>
</template>

<script lang="ts" setup>
import ProfileCard from "~/components/home/ProfileCard.vue"
import { UContainer } from "#components"
import CardGroup from "~/components/home/CardGroup.vue"
import ProjectList from "~/components/home/ProjectList.vue"
import Sidebar from "~/components/sidebar/Sidebar.vue"
import LinksSection from "~/components/home/LinksSection.vue"
import DonationSection from "~/components/home/DonationSection.vue"
</script>

<style scoped>
@import "~/assets/css/main.css";

.section {
  @apply theme-font border-l-primary-500 my-4 flex items-center border-l-6 px-4 text-3xl;
}

.sidebar {
  @apply my-4 overflow-hidden border-gray-700 p-4 lg:border-l-2;
}
</style>
