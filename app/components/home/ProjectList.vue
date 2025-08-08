<template>
  <div class="projects">
    <div
      v-for="project in processedProjects"
      :key="project.id"
      class="project-item">
      <div class="image-container">
        <!-- TODO: Image Placeholder -->
        <NuxtImg
          :src="project.image === '' ? '' : project.image"
          class="h-full w-full object-cover"
          loading="lazy"
          :alt="project.title" />
      </div>
      <div class="p-4">
        <div class="flex items-center justify-between">
          <div class="flex">
            <NuxtImg
              :src="`https://github.com/${project.gh.user}.png?size=64`"
              class="mr-2 h-6 w-6 rounded-md"
              loading="lazy"
              :alt="project.gh.repo" />
            <a
              class="text-xl font-bold text-pink-300"
              :href="project.website"
              target="_blank">
              {{ project.title }}
            </a>
          </div>
          <div
            v-if="project.status !== ''"
            class="rounded-lg border-2 border-gray-500 px-2 py-1 text-xs text-gray-400">
            {{ project.status }}
          </div>
        </div>
        <p class="mt-2 text-gray-300">{{ project.description }}</p>
        <div class="mt-3 flex flex-wrap gap-2">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="rounded-full bg-pink-900/50 px-3 py-1 text-xs">
            {{ tag }}
          </span>
        </div>
        <div class="mt-4 flex gap-3">
          <a
            v-if="project.github !== ''"
            :href="project.github"
            target="_blank"
            class="text-sm text-pink-400">
            GitHub
            <Icon name="mdi:open-in-new" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { projects, extractGithubLink } from "~/utils/data"

const processedProjects = projects.map((project) => {
  const githubInfo = extractGithubLink(project.github)
  return {
    ...project,
    gh: githubInfo,
  }
})
</script>

<style scoped>
@import "tailwindcss";

.projects {
  @apply grid grid-flow-col grid-rows-2 gap-6 overflow-auto;
  grid-auto-columns: 20rem;
}

.project-item {
  @apply flex flex-col overflow-hidden rounded-lg border border-transparent bg-black/30 shadow-lg transition-all hover:-translate-y-0.5 hover:border-pink-300 hover:bg-black/50 hover:shadow-xl;
  /* 添加最小宽度确保项目不会被压缩 */
  min-width: 20rem;
}

.image-container {
  @apply h-40 w-full object-cover;
}
</style>
