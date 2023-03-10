<template>
  <section class="mt-20">
    <div class="flex flex-row">
      <div class="w-1/3 p-4 mr-8">
        <h1 class="text-4xl font-semibold text-white">Billing and payments</h1>
        <p class="mt-2 mb-6">
          Management of financial transactions related to services used on the platform. This includes the ability to
          view usage, generate invoices, and make payments securely.
        </p>
        <form class="flex flex-row justify-between mb-16">
          <currency-input />
          <div>
            <button class="bg-success text-dark font-medium py-2 px-4 rounded-lg">
              <span>Deposit</span>
            </button>
          </div>
        </form>
        <div>
          <a class="text-link flex flex-row" href="https://docs.nodeless.xyz" target="_blank"
            >Learn more<link-icon class="p-1.5"
          /></a>
          <a class="text-link" href="https://docs.nodeless.xyz" target="_blank">Get usage report</a>
        </div>
      </div>
      <div class="w-2/3 p-4">
        <billing-dashboard />
        <p class="text-gray text-sm py-4">
          Develop plan allows free usage of testnets only. To use mainnets, please ensure a positive account balance and
          upgrade to Production plan by making a deposit.
        </p>
        <billing-payments />
      </div>
    </div>
  </section>
</template>

<script>
import LinkIcon from '@/components/icons/LinkIcon.vue'
import BillingDashboard from '@/components/BillingDashboard.vue'
import BillingPayments from '@/components/BillingPayments.vue'
import CurrencyInput from '@/components/ui/CurrencyInput.vue'

export default {
  components: {
    LinkIcon,
    BillingDashboard,
    BillingPayments,
    CurrencyInput,
  },
}
</script>
