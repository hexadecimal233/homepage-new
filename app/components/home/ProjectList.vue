<template>
  <div class="projects">
    <div v-for="project in processedProjects" :key="project.id" class="project-item">
      <div
        :class="
          'image-container relative overflow-hidden rounded-t-lg bg-cover bg-center ' +
          'bg-neutral-500'
        "
        :style="{
          backgroundImage: project.image ? `url(${project.image})` : 'none',
        }">
        <div class="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
        <div class="absolute inset-0 flex items-start justify-between p-3">
          <div class="flex items-center">
            <NuxtImg
              :src="`https://github.com/${project.gh.user}.png?size=64`"
              class="mr-2 h-6 w-6 rounded-md"
              loading="lazy"
              :alt="project.gh.repo" />
            <a
              class="text-primary-300 text-lg font-bold"
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
        <p class="mt-1.5 flex-1 text-sm text-neutral-500">
          {{ project.description }}
        </p>
        <div class="mt-2 flex flex-wrap gap-1.5">
          <UBadge v-for="tag in project.tags" :key="tag" size="sm">
            {{ tag }}
          </UBadge>
          <UButton
            v-if="project.github !== ''"
            :href="project.github"
            target="_blank"
            icon="lucide:square-arrow-out-up-right"
            variant="outline"
            size="sm">
            GitHub
          </UButton>
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
@import "~/assets/css/main.css";

a {
  @apply underline;
}

.projects {
  @apply grid grid-cols-1 gap-4 md:grid-cols-2;
  grid-auto-columns: 16rem;
}

.project-item {
  @apply hover:border-primary-300 flex flex-col rounded-lg border border-neutral-200 shadow-sm transition-all ease-in-out hover:-translate-y-0.5 hover:scale-[98%] hover:bg-gray-50 hover:shadow-md dark:border-neutral-700 dark:hover:bg-neutral-950;
  min-width: 16rem;
}

.image-container {
  height: 120px;
}
</style>
