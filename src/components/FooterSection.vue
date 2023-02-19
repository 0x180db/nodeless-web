<template>
  <footer class="bg-transparent py-8 px-4 flex justify-between items-center">
    <div class="flex flex-row">
      <span class="text-gray-400">&copy; Nodeless</span>
      <a href="#" class="ml-4 text-gray-400 hover:text-white">Legacy</a>
      <a href="#" class="ml-4 text-gray-400 hover:text-white">Privacy</a>
      <a href="#" class="flex flex-row flex-start ml-4 text-gray-400 hover:text-white"
        >Docs<link-icon class="p-1.5"
      /></a>
    </div>
    <button
      class="bg-transparent text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded-lg flex items-center"
    >
      <span class="mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
          <path
            d="M23.954 4.3a9.98 9.98 0 01-2.82.773 4.98 4.98 0 002.175-2.742 9.946 9.946 0 01-3.152 1.204 4.986 4.986 0 00-8.51 4.294c0 .39.044.772.129 1.137A14.144 14.144 0 012.74 3.06a4.99 4.99 0 001.546 6.652 4.935 4.935 0 01-2.258-.618v.063c0 2.187 1.558 4.008 3.623 4.418-.378.102-.773.16-1.184.16a4.443 4.443 0 01-.933-.096 4.99 4.99 0 004.657 3.454A9.93 9.93 0 010 19.275 14.037 14.037 0 007.54 21c9.128 0 14.098-7.473 14.098-13.946 0-.21-.005-.418-.015-.623a10.038 10.038 0 002.461-2.566z"
          ></path>
        </svg>
      </span>
      Share on Twitter
    </button>
  </footer>
</template>

<script>
import LinkIcon from '@/components/icons/LinkIcon.vue'
export default {
  components: {
    LinkIcon,
  },
}
</script>
