<!-- 联系方式 -->

<template>
  <div class="mx-auto flex w-full max-w-4xl flex-col rounded-2xl shadow-lg">
    <div class="space-y-6 px-6 py-8">
      <p class="text-center text-4xl font-bold text-pink-300">联系方式</p>

      <div class="flex flex-col items-center justify-center space-y-4">
        <div class="flex items-center space-x-2">
          <Icon name="lucide:mail" class="text-2xl text-pink-300" />
          <p class="text-xl">Email: hexzii@nichijou.moe</p>

          <UButton
            icon="lucide:copy"
            size="md"
            color="primary"
            variant="solid"
            @click="copyEmail" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const toast = useToast()

function copyEmail() {
  navigator.clipboard.writeText("hexzii@nichijou.moe")
  toast.add({
    title: "已复制！",
  })
}
</script>
