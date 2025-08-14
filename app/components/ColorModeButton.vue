<script setup>
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === "dark"
  },
  set(_isDark) {
    colorMode.preference = _isDark ? "dark" : "light"
  },
})
</script>

<template>
  <ClientOnly v-if="!colorMode?.forced">
    <UButton
      :icon="isDark ? 'lucide:moon' : 'lucide:sun'"
      class="rounded-full text-3xl"
      color="neutral"
      aria-label="Color Mode"
      @click="isDark = !isDark" />
  </ClientOnly>
</template>
