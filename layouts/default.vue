<template>
  <div class="flex min-h-screen flex-col" id="main">
    <!-- Nav Bar -->
    <div class="flex justify-center py-8">
      <div
        class="flex gap-2 rounded-2xl bg-white/10 p-2 text-xl font-bold text-white backdrop-blur-md">
        <NuxtLink
          to="/"
          class="flex min-w-0 items-center justify-center gap-2 rounded-lg p-3 transition-all hover:bg-white/20 sm:min-w-32">
          <Icon name="mdi-home" />
          <span class="hidden sm:inline">Home</span>
        </NuxtLink>
        <a
          v-for="item in navBarItems"
          :key="item.url"
          :href="item.url"
          target="_blank"
          class="flex min-w-0 items-center justify-center gap-2 rounded-lg p-3 transition-all hover:bg-white/20 sm:min-w-32">
          <Icon :name="item.icon" />
          <span class="hidden sm:inline">{{ item.name }}</span>
        </a>
      </div>
    </div>

    <!-- MAIN -->
    <div class="flex-1">
      <slot />
    </div>

    <!-- FOOTER -->
    <div class="flex justify-center py-8">
      <div
        class="text-md flex flex-col items-center justify-center rounded-2xl bg-white/10 p-4 text-gray-400 backdrop-blur-md">
        <p>
          This site was updated on
          {{ new Date(runtimeConfig.public.buildTime).toLocaleTimeString() }}
        </p>
        <div class="flex">
          <Icon name="simple-icons:github" class="text-xl" />
          <a
            href="https://github.com/hexadecimal233/homepage-new"
            target="_blank">
            Open me at Github
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
</script>

<style scoped>
#main {
  background-color: #0f172a;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 30px 30px;
  background-position: center center;
}
</style>
