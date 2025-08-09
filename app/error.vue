<script setup lang="ts">
import { type NuxtError } from "#app"
defineProps({
  error: Object as () => NuxtError,
})

useHead(() => ({
  title: "Error",
}))
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col items-center justify-center p-4">
      <div class="w-full max-w-2xl space-y-6 text-center">
        <span class="text-[10rem] font-bold md:text-[15rem]">
          {{ error?.statusCode }}
        </span>
        <div class="text-3xl font-bold text-gray-200 md:text-4xl">
          {{ error?.statusMessage || "Something went wrong" }}
        </div>

        <p class="text-gray-400">
          Yes... We're just experiencing some little issues here. :P
        </p>

        <UButton icon="mdi:home" size="xl" to="/">Back to home</UButton>
      </div>
    </div>
  </NuxtLayout>
</template>
