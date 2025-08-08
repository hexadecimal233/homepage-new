<template>
  <button
    class="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-pink-300 text-white shadow-lg hover:bg-pink-400">
    <Icon :name="icon" class="text-xl" />
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  icon: string
}>()
</script>
