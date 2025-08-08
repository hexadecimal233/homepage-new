<script setup lang="ts">
import { type NuxtError } from "#app"
defineProps({
  error: Object as () => NuxtError,
})
</script>

<template>
  <NuxtLayout>
    <div
      class="flex min-h-dvh flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-4 dark:from-gray-900 dark:to-gray-800">
      <div class="w-full max-w-2xl space-y-6 text-center">
        <!-- Error code with animation -->
        <div class="relative">
          <span
            class="text-[10rem] font-bold tracking-tighter text-gray-300 md:text-[15rem] dark:text-gray-700">
            {{ error?.statusCode }}
          </span>
          <span
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-gray-800 md:text-8xl dark:text-gray-200">
            {{ error?.statusCode }}
          </span>
        </div>

        <!-- Error message -->
        <h1
          class="text-3xl font-bold text-gray-800 md:text-4xl dark:text-gray-200">
          {{ error?.statusMessage || "Something went wrong" }}
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <!-- Action buttons -->
        <div class="flex flex-col justify-center gap-4 pt-6 sm:flex-row">
          <NuxtLink
            href="/"
            class="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700">
            Back to Homepage
          </NuxtLink>
          <button
            @click="reload()"
            class="rounded-lg bg-gray-200 px-6 py-3 font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
            Reload Page
          </button>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts">
function reload() {
  window.location.reload()
}
</script>
