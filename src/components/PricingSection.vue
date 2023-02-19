<template>
  <div class="flex flex-row">
    <!-- Free Plan -->
    <div class="w-1/2 px-4 mb-8">
      <div class="mx-auto flex items-center justify-center">
        <div class="h-full w-full rounded-md bg-code p-1">
          <div class="bg-code h-full w-wull p-8">
            <h2 class="text-3xl font-bold mb-4 text-gray-800">Free Plan</h2>
            <p class="text-lg text-gray-700 mb-4">Perfect for development and testing.</p>
            <ul class="text-gray-700 h-56">
              <li>Unlimited users</li>
              <li>1 project</li>
              <li>Basic support</li>
              <li>Limited features</li>
              <li>Share account</li>
            </ul>
            <button class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
              Sign up now
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Production Plan -->
    <div class="w-1/2 px-4 mb-8">
      <div class="mx-auto flex items-center justify-center">
        <div class="h-full w-full rounded-md bg-gradient-to-r from-primary to-secondary to-yellow-500 p-1">
          <div class="bg-code h-full w-wull p-8">
            <h2 class="text-3xl font-bold mb-4 text-gray-800">Production Plan</h2>
            <p class="text-lg text-gray-700 mb-4">Pay only for what you use. Pay as you go</p>
            <ul class="text-gray-700 h-56">
              <li>Unlimited users</li>
              <li>Unlimited projects</li>
              <li>Premium support</li>
              <li>Advanced features</li>
            </ul>
            <button class="bg-success hover:bg-purple-600 text-dark font-bold py-2 px-4 rounded-full">Go Live</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
