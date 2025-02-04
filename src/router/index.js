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
      meta: { title: '菜單' },
    },
    {
      path: '/pizza',
      name: 'pizza',
      component: () => import('../views/PizzaView.vue'),
      meta: { title: '披薩' },
    },
    {
      path: '/drink',
      name: 'drink',
      component: () => import('../views/DrinkView.vue'),
      meta: { title: '飲品' },
    },
    {
      path: '/FAQ',
      name: 'FAQ',
      component: () => import('../views/FAQView.vue'),
      meta: { title: '常見問題' },
    },
    {
      path: '/error',
      name: 'Error',
      component: () => import('@/views/404View.vue'),
      meta: { title: '404 Page not Found', hideHeaderFooter: true },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/error',
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
  document.title =
    to.meta.title !== undefined ? `${to.meta.title} - Buddy House 壹耗店` : `Buddy House 壹耗店`
})

export default router
