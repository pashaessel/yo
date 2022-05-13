import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/campaigns',
    name: 'campaigns',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/campaigns/CampaignsView.vue')
  },
  {
    path: '/campaigns/create',
    name: 'campaigns/create',
    component: () => import('../views/campaigns/CampaignsCreateView.vue')
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import('../views/authorize/SignInView.vue')
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: () => import('../views/authorize/SignUpView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
