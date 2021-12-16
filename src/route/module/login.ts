const loginRouter = {
    path: '/login',
    component: () => import('@/view/login/Login.vue'),
    name: 'Login',
}

export default loginRouter