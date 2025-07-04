<template>
  <div class="fixed top-0 left-0 z-[-1] h-full w-full bg-slate-900">
    <div class="bg-pattern absolute inset-0"></div>
    <!-- TODO: 动态背景-->
  </div>
  <!--页脚在内容不满页面时自动固定在底部，内容满页时跟随页面滚动到底部-->
  <div class="flex min-h-screen flex-col">
    <div class="flex-1">
      <slot />
    </div>
    <footer class="bg-slate-800 py-4 text-center text-sm text-gray-400">
      This site was updated on
      {{ new Date(runtimeConfig.public.buildTime).toLocaleTimeString() }}
    </footer>
  </div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
</script>

<style scoped>
.bg-pattern {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
  background-position: center center;
}
</style>
