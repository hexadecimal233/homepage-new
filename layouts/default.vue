<template>
  <!-- 背景 -->
  <div class="fixed top-0 left-0 z-[-1] h-full w-full bg-slate-900">
    <div class="bg-pattern absolute inset-0"></div>
    <!-- TODO: 动态背景-->
  </div>

  <div class="flex min-h-screen flex-col *:px-4 *:py-4">
    <!-- 导航栏 -->
    <div class="flex justify-center">
      <div
        class="flex gap-2 rounded-2xl bg-white/10 p-2 text-xl font-bold text-white backdrop-blur-md">
        <NuxtLink
          to="/"
          class="flex items-center gap-2 rounded-lg px-3 py-2 transition-all hover:bg-white/20 hover:text-white/90 md:px-4">
          <Icon name="mdi-home" />
          <span class="block">Home</span>
        </NuxtLink>
        <NuxtLink
          to="/c"
          class="flex items-center gap-2 rounded-lg px-3 py-2 transition-all hover:bg-white/20 hover:text-white/90 md:px-4">
          <Icon name="mdi-account" />
          <span class="block">Contact</span>
        </NuxtLink>
        <a
          v-for="item in navBarItems"
          :key="item.url"
          :href="item.url"
          target="_blank"
          class="flex items-center gap-2 rounded-lg px-3 py-2 transition-all hover:bg-white/20 hover:text-white/90 md:px-4">
          <Icon :name="item.icon" />
          <span class="block">{{ item.name }}</span>
        </a>
      </div>
    </div>
    <div class="flex-1">
      <slot />
    </div>
    <div class="text-md flex justify-center bg-slate-800 text-gray-400">
      <p>
        This site was updated on
        {{ new Date(runtimeConfig.public.buildTime).toLocaleTimeString() }}
      </p>
      <a
        href="https://github.com/hexadecimal233/homepage-new"
        target="_blank"
        class="ml-2 flex items-center gap-2 rounded-lg px-3 py-2 transition-all hover:bg-white/20 hover:text-white/90 md:px-4">
        <Icon name="simple-icons:github" class="text-2xl" />
        Open me at Github
      </a>
    </div>
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
