import { createRouter, createWebHistory } from 'vue-router'
import authRoutes from './routes/authRoutes'
import AboutView from '../views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
// import Home from '@/components/Home.vue'


const routes = [
  ...authRoutes,
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
