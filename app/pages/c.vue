<template>
  <div
    class="mx-auto flex w-full max-w-4xl flex-col rounded-2xl bg-slate-800 text-white shadow-lg">
    <div class="space-y-6 px-6 py-8">
      <h1 class="text-center text-4xl font-bold text-pink-300">联系方式</h1>

      <div class="flex flex-col items-center justify-center space-y-4">
        <div class="flex items-center space-x-2">
          <Icon name="mdi:email" class="text-2xl text-pink-300" />
          <p class="text-xl">Email: contact@onlyra1n.top</p>
          <button
            @click="copyEmail"
            class="ml-2 flex items-center justify-center rounded-md border-2 border-slate-600 p-1 transition-colors hover:bg-white/20"
            title="复制邮箱">
            <Icon name="mdi:content-copy" class="text-lg" />
            <div
              v-if="showCopied"
              class="animate-fade-in text-sm text-green-400">
              复制成功！
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script lang="ts" setup>
// TODO: Use Toast
const showCopied = ref(false)
function copyEmail() {
  navigator.clipboard.writeText("contact@onlyra1n.top")
  showCopied.value = true
}
</script>
