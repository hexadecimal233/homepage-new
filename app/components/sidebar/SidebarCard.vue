<template>
  <div class="sidebar-card">
    <div class="flex items-center gap-2">
      <Icon v-if="icon" :name="icon" class="text-2xl text-pink-300" />
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

<style scoped>
@import "tailwindcss";

.sidebar-card {
  @apply mb-4 rounded-xl bg-black/30 p-4;
}
</style>
