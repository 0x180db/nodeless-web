import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/solarized-light.css'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './HomePage.vue'
import KeysPage from './KeysPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/access-keys', component: KeysPage },
  ],
})

createApp(App).use(VueHighlightJS).use(router).mount('#app')
