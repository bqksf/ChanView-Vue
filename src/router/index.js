import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from '../plugins/nprogress'

Vue.use(VueRouter)

let routes = [
    {
        // 匹配其他url
        path: '*',
        component: () => import('../views/404.vue'),
    },
    {
        //默认首页
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        meta: {
            isPublic: true,
        },
    },
    {
        path: '/blog-content/:id',
        name: 'Blog-Content',
        component: () => import('../views/Blog-Content.vue'),
        props: true,
        meta: {
            isPublic: true,
        },
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
        meta: {
            isPublic: true,
        },
    },
    {
        path: '/blog',
        name: 'Blog',
        component: () => import('../views/Blog.vue'),
        meta: {
            isPublic: true,
        },
    },
    {
        path: '/price',
        name: 'Price',
        component: () => import('../views/Price.vue'),
        meta: {
            isPublic: true,
        },
    },
    {
        path: '/sign-in',
        name: 'Sign-In',
        component: () => import('../views/Sign-In.vue'),
        meta: {
            isPublic: true,
        },
    },
    {
        path: '/sign-up',
        name: 'Sign-Up',
        meta: {
            layoutClass: 'layout-sign-up',
            isPublic: true,
        },
        component: () => import('../views/Sign-Up.vue'),
    },
    {
        path: '/main',
        name: 'Main',
        layout: "dashboard",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "main" */ '../views/Main.vue'),
        children: [
            {
                path: '/gas-tracker',
                name: 'Gas费跟踪',
                component: () => import('../views/GasTracker.vue'),
            },
            {
                path: '/eth-deposit-contract',
                name: 'ETH锁仓量',
                component: () => import('../views/ETHDepositContract.vue'),
            },
            {
                path: '/axie',
                name: 'Axie Infinity',
                component: () => import('../views/Axie.vue'),
            },
            {
                path: '/looks',
                name: 'LooksRare',
                component: () => import('../views/Looksrare.vue'),
            },
            {
                path: '/arb',
                name: 'Arbitrum',
                component: () => import('../views/Arbitrum.vue'),
            },
            {
                path: '/lido',
                name: 'Lido',
                component: () => import('../views/Lido.vue'),
            },
            {
                path: '/Profile',
                name: '个人中心',
                meta: {
                    layoutClass: 'layout-profile',
                },
                component: () => import('../views/Profile.vue'),
            },
            {
                path: '/alert',
                name: '行情提醒',
                component: () => import('../views/Alert.vue'),
            },
            {
                path: '/news',
                name: '新闻服务',
                component: () => import('../views/News.vue'),
            },
            {
                path: "/categories/create",
                name: "添加分类",
                component: () => import('../views/CategoryEdit.vue'),
            },
            {
                path: "/categories/edit/:id",
                name: "修改分类",
                component: () => import('../views/CategoryEdit.vue'),
                props: true
            },
            {
                path: "/categories/list",
                name: "分类列表",
                component: () => import('../views/CategoryList.vue'),
            },
            {
                path: "/articles/create",
                name: "添加文章",
                component: () => import('../views/ArticleEdit.vue'),
            },
            {
                path: "/articles/edit/:id",
                name: '修改文章',
                component: () => import('../views/ArticleEdit.vue'),
                props: true
            },
            {
                path: "/articles/list",
                name: '文章列表',
                component: () => import('../views/ArticleList.vue'),
            },
            {
                path: "/comments/list",
                name: '评论列表',
                component: () => import('../views/CommentList.vue'),
                props: true
            },
            {
                path: "/users/list",
                component: () => import('../views/UserList.vue'),
            },
            {
                path: "/users/edit",
                name: "修改密码",
                component: () => import('../views/UserEdit.vue'),
            }
        ]
    }
]

// Adding layout property from each route to the meta
// object so it can be accessed later.
function addLayoutToRoute(route, parentLayout = "default") {
    route.meta = route.meta || {};
    route.meta.layout = route.layout || parentLayout;

    if (route.children) {
        route.children = route.children.map((childRoute) => addLayoutToRoute(childRoute, route.meta.layout));
    }
    return route;
}

routes = routes.map((route) => addLayoutToRoute(route));

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes,
    //定义路由跳转时，滚动条的位置
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {//跳到指定位置
                selector: to.hash,
                behavior: 'smooth',
            }
        }
        return {//跳回顶部
            x: 0,
            y: 0,
            behavior: 'smooth',
        }
    }
})

//导航守卫
router.beforeEach((to, from, next) => {
    NProgress.start()
    if (!to.meta.isPublic && !localStorage.token) {//页面是私有并且token不存在
    	return next('/sign-in')
    }
    if (to.path === '/eth-deposit-contract') {
        if (localStorage.vip !== '2') {
            alert('您不是高级用户，无法访问此页面')
            NProgress.done()
            return
        }
    }
    if (to.path === '/alert') {
        if (localStorage.vip !== '2') {
            alert('您不是高级用户，无法访问此页面')
            NProgress.done()
            return
        }
    }
    next()
    NProgress.done()
})
router.afterEach(() => {
    NProgress.done()
})

export default router
