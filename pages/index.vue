<template>
  <div class="px-4 py-8">
    <div
      class="mx-auto flex w-full max-w-4xl flex-col rounded-2xl bg-white/10 text-white shadow-lg backdrop-blur-md lg:flex-row">
      <div class="space-y-2 px-6 py-8 lg:flex-[70%]">
        <div class="flex">
          <img
            src="https://gravatar.loli.net/avatar/daca850545a454e39660992d1163e88e?size=256&cache=1718432418567"
            class="h-32 w-32 rounded-xl border-4 shadow-lg"
            alt="Hexzii"
            sizes="sm:128px md:256px" />
          <div class="mt-2 ml-4">
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
            <img src="/assets/img/arturia.png" class="h-12" alt="Arturia" />
            <p>Arturia</p>
            <p class="text-md text-gray-400">Minilab 3</p>
          </div>
        </div>

        <p class="section lilita-one-regular">Projects</p>

        <div class="projects">
          <div
            class="project-item"
            v-for="project in processedProjects"
            :class="project.archived ? 'archived' : ''">
            <div class="flex text-lg">
              <NuxtImg
                :src="`https://github.com/${project.gh.user}.png?size=64`"
                class="mr-2 h-6 w-6 rounded-md"
                loading="lazy"
                :alt="project.gh.repo" />
              <a
                class="flex items-baseline gap-2 font-bold text-pink-300"
                :href="project.url"
                target="_blank">
                <p>{{ project.gh.user }}/{{ project.gh.repo }}</p>
                <!-- TODO: Better archived-->
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
          <a href="https://ko-fi.com/hexzii" class="font-bold text-red-400">
            <Icon name="simple-icons:kofi" />
            Ko-Fi
          </a>
          or
          <!-- 到时候不能再摆了要多做点项目去宣传！！ -->
          <a href="https://afdian.com/a/hexzii" class="font-bold text-blue-300">
            <Icon name="simple-icons:afdian" />
            Afdian (CN)
          </a>
          !!!
          <br />
          <br />
          —— Or you can check out my store for free drops and more stuff!
          (actually there's nothing here yet🫣)
          <!-- 
        TODO: PayPal / etc.
        --></p>

        <p class="section lilita-one-regular">Links</p>

        <div
          v-for="category in links"
          :key="category.name"
          class="lilita-one-regular w-full">
          <div
            class="flex cursor-pointer items-center justify-between bg-black/20 p-2 hover:bg-black/40"
            @click="toggleCategory(category.name)">
            <div class="flex items-center space-x-2">
              <Icon
                name="mdi:chevron-down"
                :class="{ 'rotate-180': isExpanded(category.name) }" />
              <h3 class="text-xl">{{ category.name }}</h3>
            </div>
            <p class="text-sm text-gray-400">{{ category.desc }}</p>
          </div>

          <Transition name="slide">
            <div v-show="isExpanded(category.name)" class="mt-2 space-y-2 pl-2">
              <div v-for="link in category.links" :key="link.name">
                <a
                  :href="link.url"
                  target="_blank"
                  class="flex flex-row items-center space-x-1 rounded-lg bg-black/30 p-2 transition-all hover:-translate-y-0.5 hover:bg-black/50">
                  <Icon :name="link.icon" />
                  <NuxtImg
                    :src="link.image"
                    v-if="link.image"
                    class="h-[0.7lh]"
                    loading="lazy"
                    :alt="link.name" />
                  <p>{{ link.name }}</p>
                  <p class="text-gray-400">{{ link.desc }}</p>
                </a>
              </div>
            </div>
          </Transition>
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
            <p class="lilita-one-regular text-xl">Friends</p>
          </div>

          <div class="mt-2 h-full space-y-2">
            <div v-for="link in visibleLinks" :key="link.url">
              <a
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 rounded-lg bg-black/20 p-2 transition-all hover:bg-black/40">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500/20">
                  <NuxtImg
                    class="rounded-lg"
                    :src="link.image"
                    v-if="link.image"
                    loading="lazy"
                    :alt="link.name"
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

          <!-- Pagination Controls -->
          <div v-if="totalPages > 1" class="pagination-controls">
            <button
              @click="prevPage"
              :disabled="currentPage === 1"
              title="Previous Page"
              class="pagination-button">
              <Icon name="mdi:arrow-left" />
            </button>
            <button
              @click="nextPage"
              :disabled="currentPage === totalPages"
              title="Next Page"
              class="pagination-button">
              <Icon name="mdi:arrow-right" />
            </button>
          </div>
        </div>

        <div class="sidebar-card">
          <div class="flex items-center gap-2">
            <Icon name="mdi:message-bulleted" class="text-2xl text-pink-300" />
            <h3 class="lilita-one-regular text-xl">Anonymous DMs</h3>
          </div>
          <div class="flex flex-col gap-2">
            <p class="text-amber-400">Send me Anonymous DMs.</p>

            <p v-show="nglError !== ''" class="text-green-500">
              {{ nglError }}
            </p>
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
  @apply my-4 overflow-hidden border-gray-700 p-4 lg:border-l-2;
}

.sidebar-card {
  @apply mb-4 rounded-xl bg-black/30 p-4;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-in-out;
  max-height: 200px;
  overflow: hidden;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-10px);
  max-height: 0;
}
/* 分页控件样式 */
.pagination-controls {
  @apply mt-4 flex items-center justify-center gap-4;
}

.pagination-button {
  @apply rounded bg-pink-500/20 px-3 py-1 hover:bg-pink-500/30 disabled:cursor-not-allowed disabled:opacity-50;
}
</style>

<script lang="ts" setup>
import {
  links,
  projects,
  extractGithubLink,
  friendLinks,
  sites,
} from "~/utils/data"

// 响应式状态：记录哪些分类是展开的
const expandedCategories = ref<Set<string>>(
  //new Set(links.map((cat) => cat.name)),
  new Set(),
)

// 切换分类展开状态
function toggleCategory(categoryName: string) {
  const set = expandedCategories.value
  if (set.has(categoryName)) {
    set.delete(categoryName)
  } else {
    set.add(categoryName)
  }
}

// 判断是否展开
function isExpanded(categoryName: string): boolean {
  return expandedCategories.value.has(categoryName)
}

// 分页相关逻辑
const currentPage = ref(1)
const itemsPerPage = 5

const totalPages = computed(() => Math.ceil(friendLinks.length / itemsPerPage))

const visibleLinks = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return friendLinks.slice(start, start + itemsPerPage)
})

function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++
}

function prevPage() {
  if (currentPage.value > 1) currentPage.value--
}

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
