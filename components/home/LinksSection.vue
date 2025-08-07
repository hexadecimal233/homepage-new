<template>
  <div class="lilita-one-regular w-full space-y-2">
    <div v-for="category in links" :key="category.name" class="w-full">
      <div
        class="flex cursor-pointer items-center justify-between bg-black/20 p-2 hover:bg-black/40"
        @click="toggleCategory(category.name)">
        <div class="flex items-center space-x-2">
          <Icon
            name="mdi:chevron-down"
            :class="{ 'rotate-180': isExpanded(category.name) }" />
          <h3 class="text-xl">{{ category.name }}</h3>
        </div>
        <p class="text-sm text-gray-400">{{ category.desc }}</p>
      </div>

      <div
        v-show="isExpanded(category.name)"
        class="mt-2 space-y-2 overflow-hidden pl-2">
        <div v-for="link in category.links" :key="link.name">
          <a
            :href="link.url"
            target="_blank"
            class="flex flex-row items-center space-x-1 rounded-lg bg-black/30 p-2 transition-all hover:-translate-y-0.5 hover:bg-black/50">
            <Icon :name="link.icon" />
            <NuxtImg
              :src="link.image"
              v-if="link.image"
              class="h-[0.7lh]"
              loading="lazy"
              :alt="link.name" />
            <p>{{ link.name }}</p>
            <p class="text-gray-400">{{ link.desc }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { links } from "~/utils/data"

const expandedCategories = ref<Set<string>>(new Set())

function toggleCategory(categoryName: string) {
  if (expandedCategories.value.has(categoryName)) {
    expandedCategories.value.delete(categoryName)
  } else {
    expandedCategories.value.add(categoryName)
  }
}

function isExpanded(categoryName: string): boolean {
  return expandedCategories.value.has(categoryName)
}
</script>
