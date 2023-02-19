<template>
  <div class="relative">
    <div class="absolute top-0 right-0 z-10">
      <button
        v-if="!clicked"
        class="relative bg-white text-dark font-medium py-2 px-4 rounded-full"
        :class="{ 'h-10': clicked, 'w-10': clicked, 'bg-white': clicked }"
        @click="onClick"
      >
        <span>Connect</span>
      </button>
      <div v-if="clicked" class="flex flex-col text-dark">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-between mx-4">
            <warn-icon colorHex="#EF4444" class="mx-2" />
            <p class="text-error text-base font-medium">{{ balance }}</p>
            <p class="text-error text-base font-medium pl-1">USDT</p>
          </div>
          <button
            class="bg-white text-dark font-medium p-2 rounded-full flex items-center justify-center"
            :class="{ 'h-10': clicked, 'w-10': clicked, 'bg-white': clicked }"
            @click="onClick"
          >
            <logout-icon />
          </button>
        </div>
        <button
          class="bg-white text-dark font-medium p-2 mt-4 rounded-full ml-auto flex items-center justify-center"
          :class="{ 'h-10': clicked, 'w-10': clicked, 'bg-white': clicked }"
          @click="onClick"
        >
          <key-icon />
        </button>
        <button
          class="bg-white text-dark font-medium p-2 mt-4 rounded-full ml-auto flex items-center justify-center"
          :class="{ 'h-10': clicked, 'w-10': clicked, 'bg-white': clicked }"
          @click="onClick"
        >
          <bag-icon />
        </button>
        <button
          class="bg-white text-dark font-medium p-2 mt-4 rounded-full ml-auto flex items-center justify-center"
          :class="{ 'h-10': clicked, 'w-10': clicked, 'bg-white': clicked }"
          @click="onClick"
        >
          <chat-icon />
        </button>
        <button
          class="bg-white text-dark font-medium p-2 mt-4 rounded-full ml-auto flex items-center justify-center"
          :class="{ 'h-10': clicked, 'w-10': clicked, 'bg-white': clicked }"
          @click="onClick"
        >
          <settings-icon />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import WarnIcon from '@/components/icons/WarnIcon.vue'
import LogoutIcon from '@/components/icons/LogoutIcon.vue'
import KeyIcon from '@/components/icons/KeyIcon.vue'
import BagIcon from '@/components/icons/BagIcon.vue'
import ChatIcon from '@/components/icons/ChatIcon.vue'
import SettingsIcon from '@/components/icons/SettingsIcon.vue'

export default {
  components: {
    WarnIcon,
    LogoutIcon,
    KeyIcon,
    BagIcon,
    ChatIcon,
    SettingsIcon,
  },
  data() {
    return {
      clicked: false,
      balance: -2.2,
    }
  },
  methods: {
    onClick() {
      this.clicked = !this.clicked
    },
  },
}
</script>
