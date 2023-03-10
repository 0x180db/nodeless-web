<template>
  <div class="flex flex-row justify-center">
    <benefit-panel title="Zero cost development" description="Description 1" />
    <benefit-panel title="Zero Limits" description="Description 2" />
    <benefit-panel title="Zero Stress" description="Description 3" />
    <benefit-panel title="Zero Tracking" description="Description 4" />
  </div>
</template>

<script>
import BenefitPanel from '@/components/BenefitPanel.vue'
export default {
  components: {
    BenefitPanel,
  },
}
</script>
