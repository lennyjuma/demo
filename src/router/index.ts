import { createRouter, createWebHistory } from 'vue-router'
// importing components as pages
import HomeView from '../views/HomeView.vue'
import formsView from '../views/formsView.vue'
import tablesView from '../views/tablesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/forms',
      name: 'forms',
      component: formsView
    },
    {
      path: '/tables',
      name: 'tables',
      component: tablesView
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

export default router
