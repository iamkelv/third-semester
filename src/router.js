import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import NotFound from './pages/PageNotFound.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: 'Home',
      path: '/home',
      component: HomePage,
    },

    {
      name: 'Login',
      path: '/login',
      component: () => import('./pages/SignPage.vue'),
    },
    {
      name: 'Products',
      path: '/products',
      component: () => import('./pages/ProductsPage.vue'),
    },
    {
      name: 'SingleProduct',
      path: '/product/:productId',
      component: () => import('./pages/ProductDetail.vue'),
    },
    {
      path: '/cart',
      component: () => import('./pages/CartItems.vue'),
    },

    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ],
})
