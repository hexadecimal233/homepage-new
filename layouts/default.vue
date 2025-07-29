<template>
  <!-- 背景 -->
  <div class="fixed top-0 left-0 z-[-1] h-full w-full bg-slate-900">
    <div class="bg-pattern absolute inset-0"></div>
    <!-- TODO: 动态背景-->
  </div>

  <div class="flex min-h-screen flex-col *:px-4 *:py-4">
    <!-- 导航栏 -->
    <TransitionRoot
      :show="isDesktopNavBarVisible"
      enter="transform transition duration-300"
      enter-from="translate-y-[-100%] opacity-30 scale-95"
      enter-to="translate-y-0 opacity-100 scale-100"
      leave="transform transition duration-300"
      leave-from="translate-y-0 opacity-100 scale-100"
      leave-to="translate-y-[-100%] opacity-30 scale-95">
      <div class="flex justify-center">
        <div
          class="flex gap-2 rounded-2xl bg-white/10 p-2 text-white backdrop-blur-md">
          <a
            v-for="item in navBarItems"
            :key="item.url"
            :href="item.url"
            target="_blank"
            class="flex items-center gap-2 rounded-lg px-3 py-2 transition-all hover:bg-white/20 hover:text-white/90 md:px-4">
            <Icon :name="item.icon" class="text-xl" />
            <span class="block text-sm">{{ item.name }}</span>
          </a>
        </div>
      </div>
    </TransitionRoot>
    <div class="flex-1">
      <slot />
    </div>
    <footer class="bg-slate-800 text-center text-sm text-gray-400">
      This site was updated on
      {{ new Date(runtimeConfig.public.buildTime).toLocaleTimeString() }}
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { TransitionRoot } from "@headlessui/vue"

const runtimeConfig = useRuntimeConfig()

// 导航栏显示状态
const isDesktopNavBarVisible = ref(true)

// 简单的滚动处理
let lastScrollY = 0
if (process.client) {
  window.addEventListener(
    "scroll",
    () => {
      const currentScrollY = window.scrollY
      isDesktopNavBarVisible.value =
        currentScrollY <= lastScrollY || currentScrollY < 100
      lastScrollY = currentScrollY
    },
    { passive: true },
  )
}
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
