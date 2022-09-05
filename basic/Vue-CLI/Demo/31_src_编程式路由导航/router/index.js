// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

// 引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

// 创建一个路由器
const router = new VueRouter({
    routes: [
        {path: '/about', component: About},
        {
            path: '/home',
            component: Home,
            children: [
                {path: 'news', component: News},
                
                {path: 'message', component: Message,
                children:[
                    {
                        path: 'detail',
                        name: 'msgDetail',
                        component: Detail,

                        // props的第一种写法, 值为对象
                        // (该对象中所有key-value都会以props的形式传给Detail组件)
                        // props: {a:1, b:'Hello'}

                        // props的第二种写法, 值为布尔值
                        // (若布尔值为真，就会把该路由组件收到的所有 params 参数，以props的形式传给Detail组件)
                        // props: true

                        // props的第三种写法，值为函数
                        props($route){
                            return {
                                id: $route.query.id, 
                                title: $route.query.title
                            }
                        }
                        // 进阶：连续解构赋值
                        // props({query:{id, title}}){
                        //     return {
                        //         id, title
                        //     }
                        // }
                    }
                ]}
            ]
        },
    ]
})

export default router