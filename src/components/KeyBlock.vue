<template>
  <div class="flex flex-row justify-between w-full border border-gray rounded-md p-8 mb-8">
    <div class="flex flex-col">
      <h1 class="text-white text-xl font-semibold">Develop</h1>
      <div class="flow flow-row text-gray">
        <span>awaY8DWx...P4RH</span>
        <button class="px-2"><copy-icon /></button>
      </div>
      <p class="pt-4">Route to <a herf="htts://docs.nodeless.xyz/polygon/" class="text-link">Polygon</a> testnet</p>
      <p>Added on Jan 9, 2023</p>
    </div>
    <div class="self-center">
      <button class="relative w-full bg-code text-gray font-medium py-2 px-4 rounded-md">
        <span>Roll</span>
      </button>
      <p class="pt-2 text-sm mr-8">or <a herf="#" class="text-error">delete</a></p>
    </div>
  </div>
</template>

<script>
import CopyIcon from '@/components/icons/CopyIcon.vue'
export default {
  components: {
    CopyIcon,
  },
}
</script>
