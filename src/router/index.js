import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'about',
    component: AboutView
  },
  {
    path: '/shop',
    name: 'ShopView',
    component: () => import('../views/ShopView.vue')
  },
  {
    path: '/cart',
    name: 'CartView',
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/adminlogin',
    name: 'AdminLoginView',
    component: () => import('../views/AdminLoginView.vue')
  },
  {
    path: '/editview',
    name: 'EditView',
    component: () => import('../views/EditDevicesView.vue')
  },
  {
    path: '/addview',
    name: 'AddView',
    component: () => import('../views/AddDevicesView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
