<template>
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
</template>

<script lang="ts" setup>
const age = Math.floor(
  (new Date().getTime() - new Date("2007/11/08").getTime()) /
    1000 /
    60 /
    60 /
    24 /
    365,
)
</script>
