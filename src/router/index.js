import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/food',
      name: 'food',
      component: () => import('../views/FoodView.vue'),
      meta: { title: 'Food' },
    },
    {
      path: '/pizza',
      name: 'pizza',
      component: () => import('../views/PizzaView.vue'),
      meta: { title: 'Pizza' },
    },
    {
      path: '/drink',
      name: 'drink',
      component: () => import('../views/DrinkView.vue'),
      meta: { title: 'Drink' },
    },
    {
      path: '/FAQ',
      name: 'FAQ',
      component: () => import('../views/FAQView.vue'),
      meta: { title: 'FAQ' },
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
// 網頁頁籤上面會顯示官方名及當下的頁面名稱
router.beforeEach((to) => {
  document.title = to.meta.title !== undefined ? `${to.meta.title} - Buddy House` : `Buddy House`
})

export default router
