import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/solarized-light.css'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './HomePage.vue'
import KeysPage from './KeysPage.vue'
import BillingPage from './BillingPage.vue'

import VueCookies from 'vue-cookies'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/account/tokens', component: KeysPage },
    { path: '/account/billing', component: BillingPage },
  ],
})

createApp(App).use(VueCookies, { expires: '30d' }).use(VueHighlightJS).use(router).mount('#app')
