// 导入vue-router
import VueRouter from 'vue-router';

// 导入组件
import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News.vue';
import Message from '../pages/Message.vue';
import MesDetail from '../pages/MesDetail.vue';
import NewsDetail from '../pages/NewsDetail.vue';

const router = new VueRouter({
    /* 配置多组路由 */
    routes: [
        {
            path: '/about',
            component: About,
        },
        {
            path: '/home',
            component: Home,
            // 配置子级路由
            children: [
                {
                    path: 'news',
                    component: News,
                    children: [
                        {
                            name: 'newsDetail',// 命名路由
                            path: 'newsDetail',
                            component: NewsDetail
                        }
                    ]
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'mesDetail',// 命名路由
                            path: 'mesDetail/:id/:title',// 使用params传递参数
                            component: MesDetail,

                            // 布尔模式
                            // props: true

                            // 函数模式
                            // props(route) {
                            //     return {
                            //         id: route.params.id,
                            //         title: route.params.title
                            //     }
                            // },
                            props({params}) {
                                return params;
                            },
                            // beforeEnter: (to, from, next) => {
                            //   // ...
                            // }
                        }
                    ]
                }
            ]
        },
    ],
});


router.beforeEach((to, from, next) => {
    // console.log(to);
    // console.log(from);
    next();
});


export default router;
