<template>
  <div class="projects">
    <div
      v-for="project in processedProjects"
      :key="project.id"
      class="project-item">
      <div
        :class="
          'image-container relative overflow-hidden rounded-t-lg bg-cover bg-center ' +
          getRandomColor(project.id)
        "
        :style="{
          backgroundImage: project.image ? `url(${project.image})` : 'none',
        }">
        <div
          class="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
        <div class="absolute inset-0 flex items-start justify-between p-3">
          <div class="flex items-center">
            <NuxtImg
              :src="`https://github.com/${project.gh.user}.png?size=64`"
              class="mr-2 h-6 w-6 rounded-md"
              loading="lazy"
              :alt="project.gh.repo" />
            <a
              class="text-lg font-bold text-pink-300"
              :href="project.website === '#' ? project.github : project.website"
              target="_blank">
              {{ project.title }}
            </a>
          </div>
          <div
            v-if="project.status !== ''"
            class="z-10 rounded-lg border-2 border-gray-400 px-1.5 py-0.5 text-xs text-gray-300">
            {{ project.status }}
          </div>
        </div>
      </div>
      <div class="flex flex-1 flex-col p-3">
        <p class="mt-1.5 flex-1 text-sm text-gray-300">
          {{ project.description }}
        </p>
        <div class="mt-2 flex flex-wrap gap-1.5">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="rounded-full bg-pink-900/50 px-2 py-0.5 text-xs">
            {{ tag }}
          </span>
        </div>
        <div class="mt-3 flex gap-2">
          <a
            v-if="project.github !== ''"
            :href="project.github"
            target="_blank"
            class="text-xs text-pink-400">
            GitHub
            <Icon name="mdi:open-in-new" class="text-xs" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { projects, extractGithubLink } from "~/utils/data"

// 生成随机颜色的函数
function getRandomColor(id: number) {
  const colors = [
    "bg-red-300",
    "bg-blue-300",
    "bg-green-300",
    "bg-purple-300",
    "bg-pink-300",
    "bg-indigo-300",
    "bg-teal-300",
    "bg-orange-300",
    "bg-cyan-300",
    "bg-lime-300",
    "bg-amber-300",
    "bg-emerald-300",
  ]

  return colors[id % colors.length]
}

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
  @apply grid grid-cols-1 gap-4 md:grid-cols-2;
  grid-auto-columns: 16rem;
}

.project-item {
  @apply flex flex-col rounded-lg border border-transparent bg-black/30 shadow-md shadow-transparent transition-all ease-in-out hover:-translate-y-0.5 hover:scale-95 hover:border-pink-300 hover:bg-black/50 hover:shadow-pink-300;
  min-width: 16rem;
}

.image-container {
  height: 120px;
}
</style>
