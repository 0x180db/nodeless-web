<template>
  <div class="mx-20 my-8 mt-16">
    <!-- Title -->
    <h1 class="text-6xl font-black text-white text-center mb-8 mx-24">
      No Nodes, No Limits: Harness the Power of Zero-knowledge proof with Nodeless
    </h1>
    <!-- Description -->
    <p class="text-white text-lg text-center mb-4 mx-28">
      Nodeless is a developer-to-developer service that unlocks the full potential of zero-knowledge proof technology,
      enabling developers to build trustless and decentralized applications without the need to manage their own nodes.
    </p>

    <div class="flex items-center justify-center mb-12">
      <button class="bg-success text-dark font-medium py-2 px-4 rounded-lg">
        <span>Dev For Free</span>
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
        <pre v-highlightjs><code class="bg-code javascript">
          curl -X POST 'https://go.nodeless.xyz/{{ code.accessToken }}' \
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
</template>

<script lang="ts">
import LinkIcon from '@/components/icons/LinkIcon.vue'

export default {
  components: {
    LinkIcon,
  },
  data() {
    return {
      code: {
        accessToken: '{{ connect-for-access-token }}',
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
}
</script>
