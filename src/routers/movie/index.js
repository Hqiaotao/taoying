export default {
    path: '/movie',
    component: () => import('@/views/Movie'),
    children: [
        {
            path: 'hot',
            component: () => import('@/components/Hot')
        },
        {
            path: 'comic',
            component: () => import('@/components/Comic')
        },
        {
            path: 'science',
            component: () => import('@/components/Science')
        },
        {
            path: 'funny',
            component: () => import('@/components/Funny')
        }
    ],
    linkActiveClass: 'router-link-active'
}