import { createRouter, createWebHistory } from 'vue-router'
import LoginView from './module/login'

const routes = [
    LoginView,
]
export const router = createRouter({
    history: createWebHistory(),
    routes,
})