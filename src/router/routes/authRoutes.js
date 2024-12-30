import LoginView from "@/views/Auth/LoginView.vue";
import RegisterView from "@/views/Auth/RegisterView.vue";
import ResetPasswordView from "@/views/Auth/ResetPasswordView.vue";

export default [
    {
        path: '/login',
        name: 'login',
        component: LoginView,
        meta: { requireAuth: true }

    },
    {
        path: '/register',
        name: 'register',
        component: RegisterView,
        meta: { requireAuth: true }

    },
    {
        path: '/reset-password',
        name: 'reset-password',
        component: ResetPasswordView,
        meta: { requireAuth: true }

    }
]