<template>
  <div class="fixed top-0 left-0 z-[-1] h-full w-full bg-slate-900">
    <div class="bg-pattern absolute inset-0"></div>
    <!-- TODO: 动态背景-->
  </div>

  <div
    class="lilita-one-regular flex flex-col items-center justify-between px-4 py-4">
    <div
      class="mx-auto w-full max-w-3xl rounded-2xl bg-white/10 px-6 py-8 text-white shadow-lg backdrop-blur-md *:my-2">
      <div class="flex">
        <img
          src="https://gravatar.loli.net/avatar/daca850545a454e39660992d1163e88e?size=256&cache=1718432418567"
          class="h-32 w-32 rounded-xl border-4 shadow-lg" />
        <div class="mt-2 ml-4">
          <span
            class="rainbow-flasher absolute top-8 right-4 -rotate-6 font-sans text-2xl font-bold whitespace-nowrap">
            I'm just a Splash!!
          </span>
          <div class="relative flex items-end text-4xl *:mr-1">
            <p class="text-pink-300">Hexzii</p>

            <p class="font-sans text-2xl font-bold text-gray-500">
              (a.k.a. 盒沐子)
            </p>
          </div>
          <p class="font-mono text-2xl font-bold text-gray-500">
            {{ age }} y/o / coding / music
            <br />
            An Unrealistic Dreamer
          </p>
        </div>
      </div>

      <hr class="divider" />

      <p class="section">About me</p>

      <p class="font-sans text-lg">
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

      <p class="section">Languages</p>

      <div class="cards">
        <div class="card-item">
          <Icon name="twemoji:flag-united-states" class="text-3xl" />
          <p>English</p>
        </div>
        <div class="card-item">
          <Icon name="twemoji:flag-china" class="text-3xl" />
          <p>中文</p>
        </div>
      </div>

      <p class="section">Operating System</p>

      <div class="cards">
        <div class="card-item">
          <Icon name="logos:microsoft-windows-icon" class="text-3xl" />
          <p>Windows 11</p>
          <p class="text-md text-gray-500">PC</p>
        </div>
        <div class="card-item">
          <Icon name="logos:android-icon" class="text-3xl" />
          <p>Android</p>
          <p class="text-md text-gray-500">MIUI</p>
        </div>
        <div class="card-item">
          <!-- 到时候再整一台电脑一定要装个archlinux或者nixos然后换上蓝粉白配色 （xnn刻板印象时刻🤤）-->
          <Icon name="logos:manjaro" class="text-3xl" />
          <p>Linux</p>
          <p class="text-md text-gray-500">Manjaro</p>
        </div>
      </div>

      <p class="section">Creativity Gear</p>

      <div class="cards">
        <div class="card-item">
          <Icon name="simple-icons:pioneerdj" class="text-3xl" />
          <p>Pioneer</p>
          <p class="text-md text-gray-500">DDJ-FLX4</p>
        </div>
        <div class="card-item">
          <Icon name="simple-icons:sony" class="text-3xl" />
          <p>Sony</p>
          <p class="text-md text-gray-500">A-6700</p>
        </div>
        <div class="card-item">
          <Icon name="simple-icons:wacom" class="text-3xl" />
          <p>Wacom</p>
          <p class="text-md text-gray-500">CTL-472</p>
        </div>
        <div class="card-item">
          <img src="/assets/img/arturia.png" class="h-12" />
          <p>Arturia</p>
          <p class="text-md text-gray-500">Minilab 3</p>
        </div>
      </div>

      <p class="section">Projects</p>

      <div class="cards">
        <div class="card-item">
          <Icon name="mdi:directions-run" class="text-5xl" />
          <p class="text-md">Stay Tuned...</p>
          <p class="text-sm text-gray-500">Under Construction</p>
        </div>
      </div>

      <p class="section">Store</p>

      <p class="font-sans text-lg">
        Love my works? Consider donating to support me on
        <a href="https://ko-fi.com/hexzii" class="text-pink-300">
          <Icon name="simple-icons:kofi" />
          Ko-Fi
        </a>
        or
        <!-- 到时候不能再摆了要多做点项目去宣传！！ -->
        <a href="https://www.paypal.me/hexzii" class="text-blue-300">
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
        -->
      </p>

      <p class="section">Contact Me</p>

      <div v-for="link in contact" class="w-full">
        <a
          :href="link.url"
          class="flex flex-row items-center bg-black/30 text-xl transition-all duration-200 *:px-1 hover:-translate-y-0.5 hover:bg-black/50">
          <Icon :name="link.icon" />
          <img :src="link.image" v-if="link.image" class="object-contain" />
          <p>{{ link.name }}</p>
          <p class="text-gray-500">{{ link.desc }}</p>
        </a>
      </div>

      <p class="section">Social Network</p>

      <div v-for="link in social" class="w-full">
        <a
          :href="link.url"
          class="flex flex-row items-center bg-black/30 text-xl transition-all duration-200 *:px-1 hover:-translate-y-0.5 hover:bg-black/50">
          <Icon :name="link.icon" />
          <img :src="link.image" v-if="link.image" class="object-contain" />
          <p>{{ link.name }}</p>
          <p class="text-gray-500">{{ link.desc }}</p>
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

.bg-pattern {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
  background-position: center center;
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
import { social, contact } from "~/utils/data"

const age = Math.floor(
  (new Date().getTime() - new Date("2007/11/08").getTime()) /
    1000 /
    60 /
    60 /
    24 /
    365,
)
</script>
