<template>
  <div class="flex min-h-screen flex-col">
    <!-- Nav Bar -->
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

    <!-- MAIN -->
    <div class="flex-1">
      <slot />
    </div>

    <!-- FOOTER -->
    <div class="flex justify-center py-8">
      <div class="text-md flex flex-col items-center justify-center rounded-2xl p-4 text-gray-400">
        <p>Made with ❤️</p>
        <p>
          This site was updated on
          {{ new Date(runtimeConfig.public.buildTime).toLocaleTimeString() }}
        </p>
        <div class="flex">
          <Icon name="simple-icons:github" class="mr-2 text-xl" />
          <a href="https://github.com/hexadecimal233/homepage-new" target="_blank">
            Open me at Github
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom Right Buttons -->
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

const onScroll = () => {
  showToTop.value = window.scrollY > 300
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
/*
TODO: BG
#main {
  background-color: #0f172a;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 30px 30px;
  background-position: center center;
}
*/
</style>
