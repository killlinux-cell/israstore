import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/HomeView.vue'
import detailView from '../views/detailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'app',
      component: HomeView
    },
    {
      path: '/detail/:id',
      name: 'detailView',
      component: detailView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})
router.replace('/')
export default router
