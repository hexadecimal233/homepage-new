<template>
  <div class="flex min-h-screen flex-col">
    <!-- 彩虹进度条 -->
    <div ref="progressBar" class="progress-bar fixed top-0 left-0 z-50 h-1 rounded-b-md"></div>
    <!-- 导航栏 -->
    <div class="flex justify-center py-8">
      <div
        class="flex gap-2 rounded-2xl border border-neutral-200 p-2 text-xl font-bold dark:border-neutral-700 dark:bg-neutral-800">
        <NuxtLink
          to="/"
          class="flex min-w-0 items-center justify-center gap-2 rounded-lg p-3 transition-all hover:bg-neutral-100 sm:min-w-32 dark:hover:bg-neutral-700">
          <Icon name="lucide:house" />
          <span class="">Home</span>
        </NuxtLink>
        <a
          v-for="item in navBarItems"
          :key="item.url"
          :href="item.url"
          target="_blank"
          class="flex min-w-0 items-center justify-center gap-2 rounded-lg p-3 transition-all hover:bg-neutral-100 sm:min-w-32 dark:hover:bg-neutral-700">
          <Icon :name="item.icon" />
          <span class="">{{ item.name }}</span>
        </a>
      </div>
    </div>

    <!-- 主页面 -->
    <UContainer class="w-full max-w-4xl flex-1">
      <slot />
    </UContainer>

    <!-- FOOTER -->
    <div class="flex justify-center py-8">
      <div class="text-md flex flex-col items-center justify-center p-4 text-gray-400">
        <p>
          Made with
          <Icon name="mdi:heart" />
          by Hexzii
        </p>
        <p>
          This site was updated on
          {{
            new Date(runtimeConfig.public.buildTime).toLocaleDateString() +
            " " +
            new Date(runtimeConfig.public.buildTime).toLocaleTimeString()
          }}
        </p>
        <UButton
          icon="mdi:github"
          href="https://github.com/hexadecimal233/homepage-new"
          size="lg"
          target="_blank"
          variant="link">
          Open me at Github
        </UButton>
      </div>
    </div>

    <!-- 右下角的按钮 -->
    <div class="fixed right-8 bottom-8 flex flex-col items-center gap-4">
      <UButton
        @click="scrollToTop"
        class="rounded-full text-3xl opacity-0 transition-all"
        :class="showToTop ? 'opacity-100' : ''"
        icon="lucide:arrow-big-up" />
      <ColorModeButton />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { navBarItems } from "~/utils/data"

const runtimeConfig = useRuntimeConfig()
const showToTop = ref(false)

const progressBar = ref<HTMLElement | null>(null)

const onScroll = () => {
  showToTop.value = window.scrollY > 300

  if (progressBar.value) {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = (winScroll / height) * 100
    progressBar.value.style.width = scrolled + "%"
  }
}

// 滚动到顶部
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

onMounted(() => {
  window.addEventListener("scroll", onScroll)
  onScroll()
})
</script>

<style scoped>
@import "~/assets/css/main.css";

.progress-bar {
  background: linear-gradient(
    45deg,
    var(--color-red-400),
    var(--color-orange-400),
    var(--color-yellow-400),
    var(--color-green-400),
    var(--color-blue-400),
    var(--color-indigo-400),
    var(--color-purple-400)
  );

  background-size: 100dvw 100%;
}

.dark .progress-bar {
  background: linear-gradient(
    45deg,
    var(--color-red-700),
    var(--color-orange-700),
    var(--color-yellow-700),
    var(--color-green-700),
    var(--color-blue-700),
    var(--color-indigo-700),
    var(--color-purple-700)
  );

  background-size: 100dvw 100%;
}
</style>
