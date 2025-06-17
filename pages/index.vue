<template>
  <div class="flex flex-col items-center justify-between px-4 py-4">
    <div
      class="mx-auto w-full max-w-3xl space-y-2 rounded-2xl bg-white/10 px-6 py-8 text-white shadow-lg backdrop-blur-md">
      <div class="flex">
        <img
          src="https://gravatar.loli.net/avatar/daca850545a454e39660992d1163e88e?size=256&cache=1718432418567"
          class="h-32 w-32 rounded-xl border-4 shadow-lg" />
        <div class="mt-2 ml-4">
          <div
            class="minecraft-splash absolute top-4 right-4 flex -rotate-6 text-2xl font-bold">
            <p class="whitespace-nowrap">🤔</p>
          </div>
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
        -->
      </p>

      <p class="section lilita-one-regular">Contact Me</p>

      <div v-for="link in contact" class="lilita-one-regular w-full">
        <a
          :href="link.url"
          target="_blank"
          class="flex flex-row items-center space-x-1 bg-black/30 text-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-black/50">
          <Icon :name="link.icon" />
          <NuxtImg
            :src="link.image"
            v-if="link.image"
            class="object-contain"
            loading="lazy" />
          <p>{{ link.name }}</p>
          <p class="text-gray-400">{{ link.desc }}</p>
        </a>
      </div>

      <hr class="divider" />

      <div class="flex flex-col">
        <div class="mb-1">
          <p class="text-amber-400">
            Send me anonymous DMs!! (friend link requests welcome!!)
          </p>
          <p class="text-sm text-gray-400">
            To make a friend link request, site name, site link (avatar and
            description is optional) is all you need!
          </p>
        </div>
        <p v-show="nglError !== ''" class="text-green-500">{{ nglError }}</p>
        <div class="flex gap-4">
          <textarea
            class="flex-4/5 rounded-xl bg-black/30 p-2"
            v-model="nglMessage"
            placeholder="ask me anything!" />
          <button
            class="lilita-one-regular flex flex-1/5 flex-col items-center justify-center rounded-2xl bg-pink-400 text-xl"
            @click="sendNGLMessage">
            <p>Send!</p>
          </button>
        </div>
      </div>

      <p class="section lilita-one-regular">Friend Links</p>

      <div>It's so lonely here...</div>

      <p class="section lilita-one-regular">Social Network</p>

      <div v-for="link in social" class="lilita-one-regular w-full">
        <a
          :href="link.url"
          target="_blank"
          class="flex flex-row items-center space-x-1 bg-black/30 text-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-black/50">
          <Icon :name="link.icon" />
          <NuxtImg
            :src="link.image"
            v-if="link.image"
            class="object-contain"
            loading="lazy" />
          <p>{{ link.name }}</p>
          <p class="text-gray-400">{{ link.desc }}</p>
        </a>
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
  @apply my-2 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4;
}

.card-item {
  @apply flex flex-col items-center justify-center rounded-lg bg-black/30 px-2 py-4 text-xl shadow-lg transition-all duration-200 hover:bg-black/50;
}

.projects {
  @apply my-2 grid grid-cols-1 gap-4;
}

.project-item {
  @apply flex flex-col space-y-1 rounded-lg bg-black/30 px-2 py-4 text-xl shadow-lg transition-all duration-200 hover:bg-black/50;

  &.archived {
    @apply brightness-75;
  }
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
import { social, contact, projects, extractGithubLink } from "~/utils/data"

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
