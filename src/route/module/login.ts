const loginRouter = {
    path: '/login',
    component: () => import('@/view/login/Login.vue'),
    name: 'DynamicTable',
}

export default loginRouter