export const constantRoute =[
    // {
    //     path: '/download',
    //     component: () => import('@/pages/download/index.vue'),
    //     name: 'download',
    //     meta: {
    //         title: 'download',
    //         hidden: true,
    //     },
    // },
    {
        path: '/resume',
        name: 'resume',
        component: () => import('@/views/resume/index.vue'),
        meta: {
            title: '简历', // 添加标题信息
            description: '简历', // 添加描述信息
            keepAlive: true // 标识这个页面需要被缓存
        }
    },
    {
        path: '/',
        component: () => import('@/layout/index.vue'),
        name: 'layout',
        meta: {
            title: 'layout',
            hidden: false,
            icon: '',
        },
        redirect: '/index',
        children: [
            {
                path: '/index',
                name:'home',
                component: () => import('@/views/home/index.vue'),
                meta: {
                    title: '首页',
                    hidden: false,
                    icon: 'HomeFilled',
                },
            },{
                path: '/about',
                name:'about',
                component: () => import('@/views/about/index.vue'),
                meta: {
                    title: '关于',
                    hidden: false,
                    icon: 'HomeFilled',
                },
            },{
                path: '/article',
                name:'article',
                component: () => import('@/views/article/index.vue'),
                meta: {
                    title: '归档',
                    hidden: false,
                    icon: 'HomeFilled',
                },
            },{
                path: '/article/details/:path',
                name:'ArticleDetail',
                component: () => import('@/views/article/details.vue'),
                meta: {
                    title: '文章详情',
                    hidden: false,
                    icon: 'HomeFilled',
                },
            },
        ],
    },

]