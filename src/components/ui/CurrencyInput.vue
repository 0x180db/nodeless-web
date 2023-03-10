<template>
  <div class="w-full mr-4">
    <input
      class="bg-code text-white font-medium py-2 px-4 rounded-lg w-full"
      type="currency"
      :value="[value]"
      name="amount"
      @click="edit"
      @focusout="save"
      @keypress="handleKeyPress"
      ref="currencyInput"
    />
    <div class="p-2">
      <ul class="flex flex-row">
        <li v-for="(item, index) in helpers" v-bind:key="index">
          <label class="text-sm pr-2 cursor-pointer" @click="setupValue(item)">{{ item }}</label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEdit: false,
      currency: 'USDT',
      amount: '25',
      helpers: [25, 50, 75, 100, 250, 500],
    }
  },
  computed: {
    value() {
      return this.isEdit ? this.amount : this.amount + ' ' + this.currency
    },
  },
  methods: {
    handleKeyPress(event) {
      if (isNaN(Number(event.key))) {
        return event.preventDefault()
      }
    },
    edit() {
      this.isEdit = true
    },
    save() {
      this.amount = this.$refs.currencyInput.value
      if (this.amount <= 0) {
        this.amount = 50
      }
      this.isEdit = false
    },
    setupValue(amount) {
      this.amount = amount
    },
  },
}
</script>
