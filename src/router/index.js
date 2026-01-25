import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/Views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'О бренде',
      component: () => import('@/Views/AboutView.vue')
    },
    {
      path: '/shop',
      name: 'Магазин',
      component: () => import('@/Views/ShopView.vue'),
      children: [
        {
          path: 'category',
          name: 'Магазин',
          component: () => import('@/Views/CategoryAllView.vue')
        },
        {
          path: 'category/:type',
          name: 'Категории',
          component: () => import('@/Views/CategoryView.vue')
        }
      ]
    },
    {
      path: '/contacts',
      name: 'Контакты',
      component: () => import('@/Views/ContactsView.vue')
    },
    {
      path: '/product/:type/:id',
      name: 'Товар',
      component: () => import('@/Views/ProductView.vue')
    },
    {
      path: '/cart',
      name: 'Корзина',
      component: () => import('@/Views/CartView.vue')
    },
    {
      path: '/order',
      name: 'Оформить заказ',
      component: () => import('@/Views/OrderView.vue')
    },
    {
      path: '/received',
      name: 'Заказ оформлен',
      component: () => import('@/Views/ReceivedView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('@/Views/NotFoundView.vue')
    }
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.name == 'home' ? 'Womazing' : `${to.name}` 
  next()
})

export default router
