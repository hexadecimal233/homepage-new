<template>
  <div class="cards theme-font">
    <div v-for="item in items" :key="item.text" class="card-item">
      <Icon v-if="item.icon" :name="item.icon" class="text-3xl" />
      <img v-if="item.image" :src="item.image" class="h-12" :alt="item.text" />
      <p>{{ item.text }}</p>
      <p v-if="item.subtext" class="text-md">
        {{ item.subtext }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  items: Array<{
    text: string
    icon?: string
    image?: string
    subtext?: string
  }>
}>()
</script>

<style scoped>
@import "~/assets/css/main.css";

.cards {
  @apply my-2 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4;
}

.card-item {
  @apply flex flex-col items-center justify-center rounded-lg px-2 py-4 text-xl shadow-sm transition-all hover:bg-neutral-50 dark:bg-neutral-800 dark:hover:bg-neutral-950;
}
</style>
