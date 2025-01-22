import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/food',
      name: 'food',
      component: () => import('../views/FoodView.vue'),
    },
    {
      path: '/pizza',
      name: 'pizza',
      component: () => import('../views/PizzaView.vue'),
    },
    {
      path: '/drink',
      name: 'drink',
      component: () => import('../views/DrinkView.vue'),
    },
    {
      path: '/FAQ',
      name: 'FAQ',
      component: () => import('../views/FAQView.vue'),
    },
  ],
  //點選連結時，可以保持原本的位置在畫面上的頂部
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
