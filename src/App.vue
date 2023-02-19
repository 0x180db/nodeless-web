<template>
  <div class="invisible absolute z-20 top-0 left-0 w-full p-4 bg-error text-dark shadow-md">
    <p>&#127881; {{ notify.message }}</p>
  </div>
  <div class="bg-gradient-to-l from-primary to-secondary rounded-3xl p-8">
    <div class="flex items-center justify-between">
      <!-- Logo -->
      <img src="@/assets/logo.svg" class="w-10 h-10 rounded-full" />
      <user-account /> 
    </div>
    <div class="mx-20 my-8 mt-16">
      <!-- Title -->
      <h1 class="text-6xl font-black text-white text-center mb-8 mx-24">
        No Nodes, No Limits: Harness the Power of Zero-knowledge proof with Nodeless
      </h1>
      <!-- Description -->
      <p class="text-white text-lg text-center mb-4 mx-28">
        Nodeless is a developer-to-developer service that unlocks the full potential of zero-knowledge proof technology,
        enabling developers to build trustless and decentralized applications without the need to manage their own
        nodes.
      </p>

      <div class="flex items-center justify-center mb-12">
        <button
          class="bg-success text-dark font-medium py-2 px-4 rounded-lg"
          :class="{ 'h-10': clicked, 'w-10': clicked, 'bg-success': clicked }"
          @click="onClick"
        >
          <span v-if="!clicked">Dev For Free</span>
        </button>
        <a href="#" class="flex flex-row flex-start text-dark p-8">Read Docs<link-icon class="p-1.5" /></a>
      </div>
      <!-- Code Example -->
      <div class="relative mx-28">
        <div class="absolute top-0 right-0 z-10 my-2 mx-4">
          <button class="relative bg-transparent text-success font-semibold py-2 px-2" @click="copyCode">
            {{ tryButton.text }}
          </button>
          <button class="relative bg-transparent text-purple-500 font-semibold py-2 px-2" @click="copyCode">
            {{ copyButton.text }}
          </button>
        </div>
        <div class="bg-code rounded-lg p-4">
          <pre v-highlightjs><code class="javascript">
          curl -X POST 'https://{{ code.accessToken }}@nodeless.xyz/{{ code.route }}' \
          -H 'Content-Type: application/json' \
          --data-raw '{
            "jsonrpc": "2.0",
            "method": "eth_getBlockByNumber",
            "params": ["latest", false],
            "id": "nodeless"
          }'
          </code></pre>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto py-8">
    <div class="text-center mb-4">
      <h2 class="text-3xl font-bold">Supported Protocols</h2>
    </div>
    <div class="flex justify-center">
      <div class="m-6">
        <img src="@/assets/protocols/polygon/monochrome_white.svg" alt="Polygon Protocol" class="h-48 w-48" />
      </div>
      <div class="m-6">
        <img src="@/assets/protocols/zk_sync_era/monochrome_white.svg" alt="zkSync Era Protocol" class="h-48 w-48" />
      </div>
      <div class="m-6">
        <img src="@/assets/protocols/stark_net/monochrome_white.svg" alt="StartNET" class="h-48 w-48" />
      </div>
      <div class="m-6">
        <img src="@/assets/protocols/immutable_x/monochrome_white.svg" alt="ImmutableX Protocol" class="h-48 w-48" />
      </div>
      <div class="m-6">
        <img src="@/assets/protocols/mina/monochrome_white.svg" alt="Mina Protocol" class="h-48 w-48" />
      </div>
    </div>
  </div>
  <div class="container mx-auto py-8">
    <div class="text-center mb-4">
      <h2 class="text-3xl font-bold">Why Nodeless?</h2>
    </div>
    <div class="flex flex-row justify-center">
      <benefit-panel title="Zero cost development" description="Description 1" />
      <benefit-panel title="Zero Limits" description="Description 2" />
      <benefit-panel title="Zero Stress" description="Description 3" />
      <benefit-panel title="Zero Tracking" description="Description 4" />
    </div>
  </div>
  <div class="container mx-auto py-8">
    <div class="text-center mb-4">
      <h2 class="text-3xl font-bold">Pricing</h2>
    </div>
    <pricing-section />
  </div>
  <footer-section />
</template>

<style>
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(93, 93, 93, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(93, 93, 93, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(93, 93, 93, 0);
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0, 0.2, 0.8, 1) 1;
  animation-iteration-count: 1;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'
import UserAccount from '@/components/UserAccount.vue'
import BenefitPanel from '@/components/BenefitPanel.vue'
import PricingSection from '@/components/PricingSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import LinkIcon from '@/components/icons/LinkIcon.vue'

export default defineComponent({
  components: {
    BenefitPanel,
    PricingSection,
    FooterSection,
    LinkIcon,
    UserAccount,
  },
  name: 'MyComponent',
  data() {
    return {
      clicked: false,
      notify: {
        showAlert: true,
        message:
          "Congratulations on signing up! Your first access token and route to the Polygon testnet have been generated. Click 'Try it!' to test it out or set up your profile.",
      },
      code: {
        accessToken: '{{ access-token }}',
        route: '{{ route }}',
      },
      copyButton: {
        text: 'Copy',
      },
      tryButton: {
        text: 'Try it!',
      },
    }
  },
  methods: {
    onClick() {
      this.clicked = true
    },
    copyCode() {
      const codeBlock = this.$el.querySelector('pre code')
      const range = document.createRange()
      range.selectNode(codeBlock)
      window.getSelection().addRange(range)
      document.execCommand('copy')
      window.getSelection().removeAllRanges()
      const originalText = this.button.text
      this.button.text = 'Copied!'
      setTimeout(() => {
        this.button.text = originalText
      }, 1000)
    },
  },
})
</script>
