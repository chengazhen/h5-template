import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutViewVue from '../views/AboutView.vue'
import PcView from '../views/pc/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutViewVue
  },
  {
    path: '/pc',
    component: PcView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
