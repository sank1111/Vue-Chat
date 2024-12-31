import { createRouter, createWebHistory } from 'vue-router'
import authRoutes from './routes/authRoutes'
import AboutView from '../views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import { useAuthStore } from '@/stores/authStore/authStore'


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

//remember matched route ma sadei /(root) auxa auxa so root route ma meta launa vayena..
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  console.log(authStore.isLoggedIn);
  ////////////////         UNAUTHENTICATED USERS        //////////////////////


  // If user is not logged in and trying to access a protected route
  if (!authStore.isLoggedIn) {
    if (to.name == 'login' || to.name == 'register') {  //if unauthenticated and tries to login and register, allow access
      return next();
    } else {
      // If user is not logged in and trying to access a protected route, redirect to login
      return next('/login');
    }
  } else {
    ////////////////         AUTHENTICATED USERS        //////////////////////


    // If user is logged in and trying to access login or register routes, redirect to home
    if (to.name == 'login' || to.name == 'register') {
      return next('/');
    } else {
      return next();
    }
  }
});



export default router
