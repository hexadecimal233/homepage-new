<template>
  <div
    class="mx-auto flex w-full max-w-4xl flex-col rounded-2xl bg-white/10 text-white shadow-lg backdrop-blur-md">
    <div class="space-y-6 px-6 py-8">
      <h1 class="lilita-one-regular text-center text-4xl text-pink-300">
        Contact Me / 联系方式
      </h1>

      <div class="flex flex-col items-center justify-center space-y-4">
        <div class="flex items-center space-x-2">
          <Icon name="mdi:email" class="text-2xl text-pink-300" />
          <p class="text-xl">Email: contact@onlyra1n.top</p>
          <button
            @click="copyEmail"
            class="ml-2 rounded-md p-1 transition-colors hover:bg-white/20"
            title="复制邮箱">
            <Icon name="mdi:content-copy" class="text-lg" />
          </button>
        </div>
        <div v-if="showCopied" class="animate-fade-in text-sm text-green-400">
          已复制到剪贴板!
        </div>
      </div>

      <!--
      <hr class="divider" />

      <div class="lilita-one-regular w-full">
        <div class="flex items-center gap-2">
          <Icon name="mdi:link" class="text-2xl text-pink-300" />
          <h3 class="text-xl">Links.Contact</h3>
        </div>

        <div class="mt-4 space-y-2">
          <a
            href="https://twitter.com/hexzii"
            target="_blank"
            class="flex items-center gap-2 rounded-lg bg-black/30 p-3 transition-all hover:bg-black/50">
            <Icon name="simple-icons:twitter" />
            <p>Twitter</p>
          </a>
        </div>
      </div>
      -->
    </div>
  </div>
</template>

<style scoped></style>

<script lang="ts" setup>
// TODO: Use alert instead
const showCopied = ref(false)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText("contact@onlyra1n.top")
    showCopied.value = true
    setTimeout(() => {
      showCopied.value = false
    }, 2000)
  } catch (err) {
    console.error("复制失败:", err)
  }
}
</script>
