<template>
  <div class="sidebar lg:flex-[30%]">
    <SidebarCard icon="mdi:home" title="My Sites">
      <div class="mt-2 space-y-2">
        <div v-for="link in sites">
          <a
            :href="link.url"
            target="_blank"
            class="flex items-center gap-2 rounded-lg bg-black/20 p-2 transition-all hover:bg-black/40">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500/20">
              <Icon :name="link.icon" class="text-2xl text-pink-300" />
            </div>
            <div class="min-w-0 flex-1">
              <p class="truncate font-bold">{{ link.name }}</p>
              <p class="text-sm break-all text-gray-400">{{ link.desc }}</p>
            </div>
          </a>
        </div>
      </div>
    </SidebarCard>

    <SidebarCard icon="mdi:link" title="Friends">
      <div class="mt-2 h-full space-y-2">
        <div v-for="link in friendLinks" :key="link.url">
          <a
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 rounded-lg bg-black/20 p-2 transition-all hover:bg-black/40">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500/20">
              <NuxtImg
                v-if="link.image"
                class="rounded-lg"
                :src="link.image"
                loading="lazy"
                :alt="link.name"
                @error="link.image = undefined" />
              <Icon v-else name="mdi:home" class="text-2xl text-pink-300" />
            </div>
            <div class="min-w-0 flex-1">
              <p class="truncate font-bold">{{ link.name }}</p>
              <p class="text-sm break-all text-gray-400">{{ link.desc }}</p>
            </div>
          </a>
        </div>
      </div>
    </SidebarCard>

    <SidebarCard icon="mdi:message-bulleted" title="Anonymous DMs">
      <div class="flex flex-col gap-2">
        <p class="text-amber-400">Send me Anonymous DMs.</p>
        <p v-show="nglError !== ''" class="text-green-500">{{ nglError }}</p>
        <textarea
          class="min-h-[4.5rem] overflow-hidden rounded-xl bg-black/30 p-2 text-sm"
          v-model="nglMessage"
          placeholder="Your message..." />
        <button
          class="lilita-one-regular flex flex-col items-center justify-center rounded-2xl bg-pink-500/20 text-xl"
          @click="sendNGLMessage">
          Send!
        </button>
      </div>
    </SidebarCard>
  </div>
</template>

<script lang="ts" setup>
import SidebarCard from "./SidebarCard.vue"
const nglMessage = ref("")

import { friendLinks, sites } from "~/utils/data"
const nglError = ref("")

async function sendNGLMessage() {
  nglError.value = ""
  const username = "hexadecimal2"

  // @ts-ignore 生成设备id
  const deviceId = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16),
  )

  const body = new URLSearchParams({
    username,
    question: nglMessage.value,
    deviceId: deviceId,
    gameSlug: "",
    referrer: "",
  })

  const resp = await fetch("https://ngl.link/api/submit", {
    method: "POST",
    body,
    mode: "no-cors",
  })

  nglError.value = "Successfully sent!"
}
</script>

<style scoped>
@import "tailwindcss";

.sidebar {
  @apply my-4 overflow-hidden border-gray-700 p-4 lg:border-l-2;
}
</style>
