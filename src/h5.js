import { createApp } from 'vue'
import App from './App.vue'
import router from './router/h5'
import store from './store'
import { i18n } from './i18n/index.js'

createApp(App).use(store).use(router).use(i18n).mount('#app')
