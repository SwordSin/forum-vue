import { createRouter, createWebHistory } from 'vue-router'
import LoginView from './module/login'
import Register from './module/register'
import Home from './module/home'

const routes = [
    // 将根路由重定向到home
    {
        path: '/',
        redirect: {
            path: '/home',
        },
    },
    LoginView,
    Register,
    Home,
]
export const router = createRouter({
    history: createWebHistory(),
    routes,
})