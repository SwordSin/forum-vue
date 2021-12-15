import { createRouter, createWebHashHistory } from 'vue-router'

// const Router = [
//     LoginRouter,
// ]

const routes = [
    { path: '/', redirect: '/login' },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/view/login/Login.vue'),
    },
]
export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})