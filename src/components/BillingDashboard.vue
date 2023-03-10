<template>
  <div class="flex flex-row">
    <div class="w-1/2 p-8 bg-code rounded-md">
      <div class="mx-auto flex flex-col justify-between h-full">
        <div>
          <p class="mb-4">Current balance</p>
          <h2 class="text-3xl font-bold mb-2 text-error">-2.2 USDT</h2>
        </div>
        <div class="mt-8">
          <a class="text-link" href="#" target="_blank">View payment history</a>
        </div>
      </div>
    </div>
    <div class="w-1/2 p-8 bg-code mx-4 rounded-md">
      <div class="mx-auto flex flex-col">
        <div>
          <p class="mb-4">Current daily bill</p>
          <h2 class="text-3xl font-bold mb-2 text-white">0 USDT</h2>
          <p class="text-sm text-warning">To go live with the Production plan, please top up your account</p>
        </div>
        <div class="mt-8">
          <a class="text-link" href="#" target="_blank">View usage this month</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
