<template>
  <div class="fixed top-0 left-0 z-[-1] h-full w-full bg-slate-900">
    <div class="bg-pattern absolute inset-0"></div>
    <!-- TODO: 动态背景-->
  </div>
  <slot />
</template>

<style scoped>
.bg-pattern {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
  background-position: center center;
}
</style>
