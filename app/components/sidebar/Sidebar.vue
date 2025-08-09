<template>
  <!-- 侧边栏三七开 -->
  <div
    class="my-4 overflow-hidden border-neutral-300 p-4 lg:max-w-[30%] lg:border-l-2 dark:border-neutral-800">
    <SidebarCard icon="mdi:home" title="My Sites">
      <div class="mt-2 space-y-2">
        <div v-for="link in sites">
          <a
            :href="link.url"
            target="_blank"
            class="card-shadow flex items-center gap-2 rounded-lg border border-gray-200 bg-white p-2 transition-all hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600">
            <div
              class="bg-primary-50 dark:bg-primary-900 flex h-12 w-12 items-center justify-center rounded-lg">
              <Icon
                :name="link.icon"
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

    <SidebarCard icon="mdi:link" title="Friends">
      <div class="mt-2 h-full space-y-2">
        <div v-for="link in friendLinks" :key="link.url">
          <a
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="card-shadow flex items-center gap-2 rounded-lg border border-gray-200 bg-white p-2 transition-all hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600">
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
                name="mdi:home"
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
  </div>
</template>

<script lang="ts" setup>
import SidebarCard from "./SidebarCard.vue"
import { friendLinks, sites } from "~/utils/data"
</script>
