<template>
  <!-- 侧边栏三七开 -->
  <div class="my-4 overflow-hidden border-neutral-300 lg:max-w-[30%] dark:border-neutral-800">
    <!-- 我的网站 -->
    <SidebarCard icon="lucide:house" title="My Sites">
      <div class="mt-2 space-y-2">
        <div v-for="link in sites">
          <a
            :href="link.url"
            target="_blank"
            class="flex items-center gap-2 rounded-lg p-2 shadow-sm transition-all hover:bg-neutral-50 dark:bg-neutral-800 dark:hover:bg-neutral-950">
            <div
              class="bg-primary-50 dark:bg-primary-900 flex h-12 w-12 items-center justify-center rounded-lg">
              <Icon :name="link.icon" class="text-primary-500 dark:text-primary-300 text-2xl" />
            </div>
            <div class="min-w-0 flex-1">
              <p class="truncate font-bold">{{ link.name }}</p>
              <p class="text-sm break-all text-gray-400">{{ link.desc }}</p>
            </div>
          </a>
        </div>
      </div>
    </SidebarCard>

    <!-- 友链 -->
    <SidebarCard icon="mdi:heart" title="Friends">
      <div class="mt-2 h-full space-y-2">
        <div v-for="link in friendLinks" :key="link.url">
          <a
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 rounded-lg p-2 shadow-sm transition-all hover:bg-neutral-50 dark:bg-neutral-800 dark:hover:bg-neutral-950">
            <div
              class="bg-primary-50 dark:bg-primary-900 flex h-12 w-12 items-center justify-center rounded-lg">
              <NuxtImg
                v-if="link.image"
                class="rounded-lg"
                :src="link.image"
                loading="lazy"
                :alt="link.name"
                @error="link.image = undefined" />
              <Icon
                v-else
                name="lucide:house"
                class="text-primary-500 dark:text-primary-300 text-2xl" />
            </div>
            <div class="min-w-0 flex-1">
              <p class="truncate font-bold">{{ link.name }}</p>
              <p class="text-sm break-all text-gray-400">{{ link.desc }}</p>
            </div>
          </a>
        </div>
      </div>
    </SidebarCard>

    <!-- 统计数据 -->
    <SidebarCard icon="lucide:stamp" title="Statistics">
      <NuxtImg
        loading="lazy"
        src="https://count.getloli.com/get/@6475578645547358_hm?theme=moebooru"
        class="w-full" />
    </SidebarCard>
  </div>
</template>

<script lang="ts" setup>
import SidebarCard from "./SidebarCard.vue"
import { friendLinks, sites } from "~/utils/data"
</script>
