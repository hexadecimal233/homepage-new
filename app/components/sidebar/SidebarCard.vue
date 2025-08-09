<template>
  <div
    class="mb-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
    <div class="flex items-center gap-2">
      <Icon v-if="icon" :name="icon" class="text-2xl text-primary-300" />
      <p class="theme-font text-xl">
        {{ title }}
      </p>
    </div>
    <div class="mt-2">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  icon?: string
}>()
</script>
