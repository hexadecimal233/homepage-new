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
  <UButton
    :icon="isDark ? 'mdi:weather-night' : 'mdi:weather-sunny'"
    class="rounded-full text-3xl"
    color="neutral"
    @click="isDark = !isDark" />
</template>
