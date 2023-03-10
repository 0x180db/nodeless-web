<template>
  <div class="relative">
    <div class="">
      <button
        v-if="!connected"
        class="relative bg-white text-gray font-medium py-2 px-4 rounded-full"
        :class="{ 'h-10': connected, 'w-10': connected, 'bg-white': connected }"
        @click="connect"
      >
        <span>Connect</span>
      </button>
      <div v-if="connected" class="flex flex-row text-gray">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-between mx-4 pl-2 pr-4 h-10 rounded-full">
            <warn-icon colorHex="#EF4444" />
            <p class="text-error text-base font-medium ml-2 mr-1">{{ balance }}</p>
            <p class="text-error text-base font-medium">USDT</p>
          </div>
        </div>

        <button
          class="text-gray font-medium p-2 mx-2 rounded-full ml-auto flex items-center justify-center"
          @click="connect"
        >
          <router-link to="/account/tokens"><key-icon /></router-link>
        </button>
        <button
          class="text-gray font-medium p-2 mx-2 rounded-full ml-auto flex items-center justify-center"
          @click="connect"
        >
          <router-link to="/account/billing"><card-icon /></router-link>
        </button>
        <button
          class="text-gray font-medium p-2 mx-2 rounded-full ml-auto flex items-center justify-center"
          @click="connect"
        >
          <chat-icon />
        </button>
        <button
          class="text-gray font-medium p-2 mx-2 rounded-full ml-auto flex items-center justify-center"
          @click="connect"
        >
          <settings-icon />
        </button>
        <button
          class="text-gray font-medium p-2 mx-2 rounded-full ml-auto flex items-center justify-center"
          @click="disconnect"
        >
          <logout-icon />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import WarnIcon from '@/components/icons/WarnIcon.vue'
import LogoutIcon from '@/components/icons/LogoutIcon.vue'
import KeyIcon from '@/components/icons/KeyIcon.vue'
import CardIcon from '@/components/icons/CardIcon.vue'
import ChatIcon from '@/components/icons/ChatIcon.vue'
import SettingsIcon from '@/components/icons/SettingsIcon.vue'

export default {
  components: {
    WarnIcon,
    LogoutIcon,
    KeyIcon,
    CardIcon,
    ChatIcon,
    SettingsIcon,
  },
  created() {
    this.$data.connected = this.$cookies.isKey('token') ? true : false
  },
  data() {
    return {
      connected: false,
      balance: -2.2,
    }
  },
  methods: {
    connect() {
      this.$cookies.set('token', 'token')
      this.connected = true
    },
    disconnect() {
      this.connected = false
      this.$router.push('/')
    },
  },
}
</script>
