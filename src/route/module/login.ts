const loginRouter = {
    path: '/login',
    componetn: () => import('@/view/login/Login.vue'),
    name: 'DynamicTable',
    meta: { title: 'Dynamic Table' },
}

export default loginRouter