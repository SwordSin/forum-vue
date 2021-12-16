const homeRouter = {
    path: '/home',
    component: () => import('@/view/home/Home.vue'),
    name: 'Home',
}

export default homeRouter