<template>
  <div class="w-1/3 bg-transparent p-6">
    <div class="text-center">
      <h2 class="text-2xl text-success font-semibold">{{ title }}</h2>
      <p class="text-gray-600">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>
