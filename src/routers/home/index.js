export default {
    path: '/home',
    component: () => import('@/views/Home'),
    children:[
        {
            path : 'city',
            component :() => import('@/components/City')
        },
        {
            path : 'nowPlaying',
            component :() => import('@/components/NowPlaying')
        },
        {
            path : 'comingSoon',
            component :() => import('@/components/ComingSoon')
        },
        {
            path : 'search',
            component :() => import('@/components/Search')
        },
    ]
}