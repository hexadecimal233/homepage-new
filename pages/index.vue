<template>
  <div class="px-4 py-8">
    <div
      class="mx-auto flex w-full max-w-4xl flex-col rounded-2xl bg-white/10 text-white shadow-lg backdrop-blur-md lg:flex-row">
      <div class="space-y-2 px-6 py-8 lg:flex-[70%]">
        <div class="flex">
          <img
            src="https://gravatar.loli.net/avatar/daca850545a454e39660992d1163e88e?size=256&cache=1718432418567"
            class="h-32 w-32 rounded-xl border-4 shadow-lg" />
          <div class="mt-2 ml-4">
            <!-- TODO: random splashes
            <div
              class="minecraft-splash absolute top-4 right-4 flex -rotate-6 text-2xl font-bold">
              <p class="whitespace-nowrap">🤔</p>
            </div>
            -->
            <div class="relative flex flex-wrap items-end space-x-1 text-4xl">
              <p class="lilita-one-regular text-pink-300">Hexzii</p>

              <p class="text-2xl font-bold text-gray-400">(a.k.a. 盒沐子)</p>
            </div>
            <p class="font-mono text-2xl font-bold text-gray-400">
              {{ age }} y/o / coding / music
              <br />
              An Unrealistic Dreamer
            </p>
          </div>
        </div>

        <hr class="divider" />

        <p class="section lilita-one-regular">About me</p>

        <p class="text-lg">
          I'm a
          <strong>passionate developer</strong>
          and
          <strong>music producer</strong>
          who loves exploring new technologies and creative tools, currently
          living in the city of Shanghai, China.
          <br />
          <br />
          Eagerly looking for some opportunities to
          <strong>collaborate</strong>
          with other devs / producers and create something fire!!!!
        </p>

        <p class="section lilita-one-regular">Languages</p>

        <div class="cards lilita-one-regular">
          <div class="card-item">
            <Icon name="twemoji:flag-united-states" class="text-3xl" />
            <p>English</p>
          </div>
          <div class="card-item">
            <Icon name="twemoji:flag-china" class="text-3xl" />
            <p>中文</p>
          </div>
        </div>

        <p class="section lilita-one-regular">Operating System</p>

        <div class="cards lilita-one-regular">
          <div class="card-item">
            <Icon name="logos:microsoft-windows-icon" class="text-3xl" />
            <p>Windows 11</p>
            <p class="text-md text-gray-400">PC</p>
          </div>
          <div class="card-item">
            <Icon name="logos:android-icon" class="text-3xl" />
            <p>Android</p>
            <p class="text-md text-gray-400">MIUI</p>
          </div>
          <div class="card-item">
            <!-- 到时候再整一台电脑一定要装个archlinux或者nixos然后换上蓝粉白配色 （xnn刻板印象时刻🤤）-->
            <Icon name="logos:manjaro" class="text-3xl" />
            <p>Linux</p>
            <p class="text-md text-gray-400">Manjaro</p>
          </div>
        </div>

        <p class="section lilita-one-regular">Creativity Gear</p>

        <div class="cards lilita-one-regular">
          <div class="card-item">
            <Icon name="simple-icons:pioneerdj" class="text-3xl" />
            <p>Pioneer</p>
            <p class="text-md text-gray-400">DDJ-FLX4</p>
          </div>
          <div class="card-item">
            <Icon name="simple-icons:sony" class="text-3xl" />
            <p>Sony</p>
            <p class="text-md text-gray-400">A-6700</p>
          </div>
          <div class="card-item">
            <Icon name="simple-icons:wacom" class="text-3xl" />
            <p>Wacom</p>
            <p class="text-md text-gray-400">CTL-472</p>
          </div>
          <div class="card-item">
            <img src="/assets/img/arturia.png" class="h-12" />
            <p>Arturia</p>
            <p class="text-md text-gray-400">Minilab 3</p>
          </div>
        </div>

        <p class="section lilita-one-regular">Projects</p>

        <!--- 敬请期待占位
      <div class="card-item">
        <Icon name="mdi:directions-run" class="text-5xl" />
        <p class="text-md">Stay Tuned...</p>
        <p class="text-sm text-gray-400">Under Construction</p>
      </div>-->

        <div class="projects">
          <div
            class="project-item"
            v-for="project in processedProjects"
            :class="project.archived ? 'archived' : ''">
            <div class="flex text-lg">
              <NuxtImg
                :src="`https://github.com/${project.gh.user}.png`"
                class="mr-2 h-6 w-6 rounded-md"
                loading="lazy" />
              <a
                class="flex items-baseline gap-2 font-bold text-pink-300"
                :href="project.url"
                target="_blank">
                <p>{{ project.gh.user }}/{{ project.gh.repo }}</p>
                <div
                  v-show="project.archived"
                  class="flex max-h-lh items-center rounded-2xl border-2 border-gray-500 px-1 py-0.5 text-sm text-gray-400">
                  Archived
                </div>
              </a>
            </div>
            <p class="text-sm text-gray-300">{{ project.desc }}</p>
          </div>
        </div>

        <p class="section lilita-one-regular">Store</p>

        <p class="text-lg">
          Love my works? Consider donating to support me on
          <a href="https://ko-fi.com/hexzii" class="text-red-400">
            <Icon name="simple-icons:kofi" />
            Ko-Fi
          </a>
          or
          <!-- 到时候不能再摆了要多做点项目去宣传！！ -->
          <a href="https://afdian.com/a/hexzii" class="text-blue-300">
            <Icon name="simple-icons:afdian" />
            Afdian (CN)
          </a>
          !!!
          <br />
          <br />
          —— Or you can check out my store for free drops and more stuff!
          (actually there's nothing here yet🫣)
          <!--
        <QR name="支付宝" image="/assets/img/alipay.png" color="#1678ff"></QR>
        <QR name="微信" image="/assets/img/wechat.png" color="#07c160"></QR>    
        TODO: PayPal / etc.
        --></p>

        <p class="section lilita-one-regular">Contact Me</p>

        <div v-for="link in contact" class="lilita-one-regular w-full">
          <a
            :href="link.url"
            target="_blank"
            class="flex flex-row items-center space-x-1 bg-black/30 text-xl transition-all hover:-translate-y-0.5 hover:bg-black/50">
            <Icon :name="link.icon" />
            <NuxtImg
              :src="link.image"
              v-if="link.image"
              class="h-[0.7lh]"
              loading="lazy" />
            <p>{{ link.name }}</p>
            <p class="text-gray-400">{{ link.desc }}</p>
          </a>
        </div>

        <p class="section lilita-one-regular">Social Network</p>

        <div v-for="link in social" class="lilita-one-regular w-full">
          <a
            :href="link.url"
            target="_blank"
            class="flex flex-row items-center space-x-1 bg-black/30 text-xl transition-all hover:-translate-y-0.5 hover:bg-black/50">
            <Icon :name="link.icon" />
            <NuxtImg
              :src="link.image"
              v-if="link.image"
              class="h-[0.7lh]"
              loading="lazy" />
            <p>{{ link.name }}</p>
            <p class="text-gray-400">{{ link.desc }}</p>
          </a>
        </div>
      </div>

      <div class="sidebar lg:flex-[30%]">
        <!-- Now Playing 
        <div class="sidebar-card">
          <div class="flex items-center gap-2">
            <Icon name="mdi:music" class="text-2xl text-pink-300" />
            <h3 class="lilita-one-regular text-xl">Now Playing</h3>
          </div>
          <div class="mt-2 flex items-center gap-2">
            <img src="/assets/img/wechat.png" class="h-16 w-16 rounded-lg" />
            <div>
              <p class="font-bold">Song Name</p>
              <p class="text-sm text-gray-400">Artist</p>
            </div>
          </div>
        </div>
        -->

        <div class="sidebar-card">
          <div class="flex items-center gap-2">
            <Icon name="mdi:home" class="text-2xl text-pink-300" />
            <p class="lilita-one-regular text-xl">My Sites</p>
          </div>
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
                  <p class="text-sm break-all text-gray-400">
                    {{ link.desc }}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="sidebar-card">
          <div class="flex items-center gap-2">
            <Icon name="mdi:link" class="text-2xl text-pink-300" />
            <p class="lilita-one-regular text-xl">Friend Links</p>
          </div>
          <div class="mt-2 space-y-2">
            <div v-for="link in friendLinks">
              <a
                :href="link.url"
                target="_blank"
                class="flex items-center gap-2 rounded-lg bg-black/20 p-2 transition-all hover:bg-black/40">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500/20">
                  <NuxtImg
                    class="rounded-lg"
                    :src="link.image"
                    v-if="link.image"
                    loading="lazy"
                    @error="link.image = undefined" />
                  <Icon v-else name="mdi:home" class="text-2xl text-pink-300" />
                </div>

                <div class="min-w-0 flex-1">
                  <p class="truncate font-bold">{{ link.name }}</p>
                  <p class="text-sm break-all text-gray-400">
                    {{ link.desc }}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="sidebar-card">
          <div class="flex items-center gap-2">
            <Icon name="mdi:message-bulleted" class="text-2xl text-pink-300" />
            <h3 class="lilita-one-regular text-xl">Anonymous DMs</h3>
          </div>
          <div class="flex flex-col gap-2">
            <p class="text-amber-400">
              Send me Anonymous DMs!! (friend link requests welcome!!)
            </p>

            <p v-show="nglError !== ''" class="text-green-500">
              {{ nglError }}
            </p>
            <textarea
              class="min-h-[4.5rem] overflow-hidden rounded-xl bg-black/30 p-2 text-sm"
              v-model="nglMessage"
              placeholder="Your message..." />
            <button
              class="lilita-one-regular flex flex-col items-center justify-center rounded-2xl bg-pink-400 text-xl"
              @click="sendNGLMessage">
              <p>Send!</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "tailwindcss";

.divider {
  @apply border-t-5 border-dashed border-gray-200;
}

.section {
  @apply border-l-6 border-l-pink-400 px-4 text-3xl;
}

.cards {
  @apply my-2 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4;
}

.card-item {
  @apply flex flex-col items-center justify-center rounded-lg bg-black/30 px-2 py-4 text-xl shadow-lg transition-all hover:bg-black/50;
}

.projects {
  @apply my-2 grid grid-cols-1 gap-4;
}

.project-item {
  @apply flex flex-col space-y-1 rounded-lg bg-black/30 px-2 py-4 text-xl shadow-lg transition-all hover:bg-black/50;

  &.archived {
    @apply brightness-75;
  }
}

.sidebar {
  @apply my-4 border-gray-700 p-4 lg:border-l-2;
}

.sidebar-card {
  @apply mb-4 rounded-xl bg-black/30 p-4;
}

.minecraft-splash {
  color: #fefe00;
  animation: splash 0.65s infinite ease-in-out;
}

@keyframes splash {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}

.rainbow-flasher {
  animation: rainbow-flash 1s infinite;
  background-clip: text;
}

@keyframes rainbow-flash {
  from {
    color: #6666ff;
  }
  10% {
    color: #0099ff;
  }
  50% {
    color: #00ff00;
  }
  75% {
    color: #ff3399;
  }
  100% {
    color: #6666ff;
  }
}
</style>

<script lang="ts" setup>
import {
  social,
  contact,
  projects,
  extractGithubLink,
  friendLinks,
  sites,
} from "~/utils/data"

const processedProjects = projects.map((project) => {
  const githubInfo = extractGithubLink(project.url)
  return {
    ...project,
    gh: githubInfo,
  }
})

const age = Math.floor(
  (new Date().getTime() - new Date("2007/11/08").getTime()) /
    1000 /
    60 /
    60 /
    24 /
    365,
)

const nglMessage = ref("")
const nglError = ref("")

// 因为CORS所以就获取不到返回结果了
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
