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
    <router-view />
  </div>
  <div v-if="$route.path === '/'" class="container mx-auto py-8">
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
  <div v-if="$route.path === '/'" class="container mx-auto py-8">
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
  <div v-if="$route.path === '/'" class="container mx-auto py-8">
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

export default defineComponent({
  components: {
    BenefitPanel,
    PricingSection,
    FooterSection,
    UserAccount,
  },
  name: 'MyComponent',
  data() {
    return {
      notify: {
        showAlert: true,
        message:
          "Congratulations on signing up! Your first access token and route to the Polygon testnet have been generated. Click 'Try it!' to test it out or set up your profile.",
      },
    }
  },
  methods: {},
})
</script>
