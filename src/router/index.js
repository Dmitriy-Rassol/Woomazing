import { createRouter, createWebHistory } from 'vue-router'
import { CATEGORY } from '../shared/constant'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'О бренде',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/shop',
      name: 'Магазин',
      component: () => import('@/views/ShopView.vue'),
      children: [
        {
          path: 'category',
          name: 'Магазин',
          component: () => import('@/views/CategoryAllView.vue')
        },
        {
          path: 'category/:type',
          name: 'Категории',
          component: () => import('@/views/CategoryView.vue')
        }
      ]
    },
    {
      path: '/contacts',
      name: 'Контакты',
      component: () => import('@/views/ContactsView.vue')
    },
    {
      path: '/product/:type/:id',
      name: 'Товар',
      component: () => import('@/views/ProductView.vue')
    },
    {
      path: '/cart',
      name: 'Корзина',
      component: () => import('@/views/CartView.vue')
    },
    {
      path: '/order',
      name: 'Оформить заказ',
      component: () => import('@/views/OrderView.vue')
    },
    {
      path: '/received',
      name: 'Заказ оформлен',
      component: () => import('@/views/ReceivedView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('@/views/NotFoundView.vue')
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
