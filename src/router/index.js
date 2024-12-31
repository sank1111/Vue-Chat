import { createRouter, createWebHistory } from 'vue-router'
import authRoutes from './routes/authRoutes'
import AboutView from '../views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import { useindexStore } from '@/stores/indexStore'


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

// router.beforeEach((to, from, next) => {

//   // if (to.path === '/' && to.query.logout === 'true') {
//   //   console.log('Logout detected via query parameter');
//   //   return next('/login');
//   // }

//   next();
// });
// router.beforeEach((to, from, next) => {
//   const indexStore = useindexStore();
//   if (to.path = '/' && to.query.logout == true) {
//     return next('login');
//   }


//   // Check if route requires authentication
//   // if (to.matched.some(record => record.meta.requireAuth)) {
//   //   if (indexStore.authenticate === true && to.query.logout == true) {
//   //     // return next('/');
//   //   } else {
//   //     return next('/');
//   //   }
//   // }

//   // Default fallback
//   next();
// });


export default router
