<template>
  <div class="sidebar lg:max-w-[30%]">
    <SidebarCard icon="mdi:home" title="My Sites">
      <div class="mt-2 space-y-2">
        <div v-for="link in sites">
          <a
            :href="link.url"
            target="_blank"
            class="flex items-center gap-2 rounded-lg bg-black/20 p-2 transition-all hover:bg-black/40">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500/20">
              <Icon :name="link.icon" class="text-2xl text-pink-300" />
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
            class="flex items-center gap-2 rounded-lg bg-black/20 p-2 transition-all hover:bg-black/40">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500/20">
              <NuxtImg
                v-if="link.image"
                class="rounded-lg"
                :src="link.image"
                loading="lazy"
                :alt="link.name"
                @error="link.image = undefined" />
              <Icon v-else name="mdi:home" class="text-2xl text-pink-300" />
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

<style scoped>
@import "tailwindcss";

.sidebar {
  @apply my-4 overflow-hidden border-gray-700 p-4 lg:border-l-2;
}
</style>
