<template>
  <div class="projects">
    <div
      v-for="project in processedProjects"
      :key="project.url"
      class="project-item"
      :class="{ archived: project.archived }">
      <div class="flex text-lg">
        <NuxtImg
          :src="`https://github.com/${project.gh.user}.png?size=64`"
          class="mr-2 h-6 w-6 rounded-md"
          loading="lazy"
          :alt="project.gh.repo" />
        <div class="flex items-baseline gap-2">
          <a
            class="font-bold text-pink-300"
            :href="project.url"
            target="_blank">
            {{ project.gh.user }}/{{ project.gh.repo }}
          </a>
          <div
            v-if="project.archived"
            class="flex max-h-lh items-center rounded-2xl border-2 border-gray-500 px-1 py-0.5 text-sm text-gray-400">
            Archived
          </div>
        </div>
      </div>
      <p class="text-sm text-gray-300">{{ project.desc }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { projects, extractGithubLink } from "~/utils/data"

const processedProjects = projects.map((project) => {
  const githubInfo = extractGithubLink(project.url)
  return {
    ...project,
    gh: githubInfo,
  }
})
</script>

<style scoped>
@import "tailwindcss";

.projects {
  @apply my-2 grid grid-cols-1 gap-4;
}

.project-item {
  @apply flex flex-col space-y-1 rounded-lg bg-black/30 px-2 py-4 text-xl shadow-lg transition-all hover:bg-black/50;
}
</style>
