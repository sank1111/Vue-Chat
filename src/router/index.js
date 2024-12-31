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
    meta: { requiresAuth: true },
  },
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

//remember matched route ma sadei /(root) auxa auxa so root route ma meta launa vayena..
// router.beforeEach((to, from, next) => {
//   const authStore = useAuthStore();
//   console.log(authStore.isLoggedIn);
//   ////////////////         UNAUTHENTICATED USERS        //////////////////////


//   // If user is not logged in and trying to access a protected route
//   if (!authStore.isLoggedIn) {
//     if (to.name == 'login' || to.name == 'register') {  //if unauthenticated and tries to login and register, allow access
//       return next();
//     } else {
//       // If user is not logged in and trying to access a protected route, redirect to login
//       return next('/login');
//     }
//   } else {
//     ////////////////         AUTHENTICATED USERS        //////////////////////


//     // If user is logged in and trying to access login or register routes, redirect to home
//     if (to.name == 'login' || to.name == 'register') {
//       return next('/');
//     } else {
//       return next();
//     }
//   }
// });


//Another approach using a middleware to handle authentication
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();  // Assume authStore is where your authentication status is stored

  // Check if any of the matched routes require authentication
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // If the route requires authentication and the user is not logged in
    if (!authStore.isLoggedIn) {
      return next({ name: 'login' });  // Redirect the user to the login page
    }
  }

  //if authenticated user tries to access a protected route, redirect to home
  if (authStore.isLoggedIn && (to.name == 'login' || to.name == 'register' || to.name == 'reset-password')) {
    return next('/');
  }

  // Proceed with navigation if no authentication is required or the user is logged in
  next();
});
//e.g user tries to navigate the login page now it will say do you have requiresAuth? and yes so it will tell do you require authentication? i.e  no  i.e false so then it will go to the next()
//e.g if user want to go / and it is true for this case now  is he logged in? no i.e unauthenticated so he will be redirected again.
//now if the user is authenticated and he tries to go / it will say yes i.e authenticated so he will go to the next()


export default router
