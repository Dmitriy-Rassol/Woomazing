import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Woomazing',
      component: () => import('../Views/HomeView.vue')
    },
    {
      path: '/shop',
      name: 'Shop',
      component: () => import('../Views/ShopView.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../Views/AboutView.vue')
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: () => import('../Views/ContactsView.vue')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../Views/CartView.vue')
    },
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.name
  next()
})

export default router