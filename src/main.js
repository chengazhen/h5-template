import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { i18n } from './i18n/index.js'

import 'virtual:uno.css'
import './assets/style/reset.css'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia).use(router).use(i18n).mount('#app')
