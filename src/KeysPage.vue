<template>
  <section class="mt-20">
    <div class="flex flex-row">
      <div class="w-1/3 p-4 mr-8">
        <h1 class="text-4xl font-semibold text-white">Access Tokens</h1>
        <p class="mt-2 mb-6">
          A secure method of accessing a node's API. It includes a route for routing requests and granting access only
          to the specified resource.
        </p>
        <button class="bg-success text-dark font-medium py-2 px-4 mb-16 rounded-lg">
          <span>New Access Token</span>
        </button>
        <div>
          <a class="text-link flex flex-row" href="https://docs.nodeless.xyz" target="_blank"
            >Learn more<link-icon class="p-1.5"
          /></a>
          <a class="text-link" href="https://docs.nodeless.xyz" target="_blank">Download credentials.json</a>
        </div>
      </div>
      <div class="w-2/3 p-4">
        <ul>
          <li><key-block /></li>
          <li><key-block /></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import LinkIcon from '@/components/icons/LinkIcon.vue'
import KeyBlock from '@/components/KeyBlock.vue'
export default {
  components: {
    LinkIcon,
    KeyBlock,
  },
}
</script>
