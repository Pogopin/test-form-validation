import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/index.vue'
import Page1 from '@/pages/page1/index.vue'
import Page2 from '@/pages/page2/index.vue'
import Reg from '@/pages/reg/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/page1',
      name: 'page1',
      component: Page1
    },
    {
      path: '/page2',
      name: 'page2',
      component: Page2
    },
    {
      path: '/registration',
      name: 'reg',
      component: Reg
    },
  ]
})

export default router
