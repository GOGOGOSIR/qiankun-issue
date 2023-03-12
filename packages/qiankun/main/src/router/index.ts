import { createRouter, createWebHistory } from 'vue-router'
import { routerConfig } from './route-config'

console.log('主应用的routes: ', routerConfig)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routerConfig,
})

export default router
