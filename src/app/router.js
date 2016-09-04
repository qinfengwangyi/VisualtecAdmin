import dashbord from './views/dashbord.vue'
import Home from './views/tests/Home.vue'
import About from './views/tests/About.vue'
import News from './views/tests/News.vue'
import Message from './views/tests/Message.vue'
import NewsDetail from './views/tests/NewsDetail.vue'

export default function routerConfig(router) {
    router.map({
        // '*': {
        //   component (resolve) {
        //     require(['./views/dashbord.vue'], resolve)
        //   }
        // },
        // '/': {
        //   component (resolve) {
        //     require(['./views/dashbord.vue'], resolve)
        //   }
        // },
        // '*': {
        //   component: dashbord
        // },
        '/': {
          component: dashbord
        },
        'home': {
          component: Home,
            subRoutes: {
                'news': {
                    component: News,
                    subRoutes: {
                        'detail/:id': {
                            name: 'detail',
                            component: NewsDetail
                        }
                    }
                },
                'message': {
                    component: Message
                }
            }
        },
        'about': {
            component: About
        }
    });

    router.beforeEach(({to, from, next}) => {
        let toPath = to.path
        let fromPath = from.path
        console.log(`to: ${toPath} from: ${fromPath}`)
        if (toPath.replace(/[^/]/g, '').length > 1) {
            router.app.isIndex = false
        }
        else {
            let depath = toPath === '/' || toPath === '/invite' || toPath === '/rank'
            router.app.isIndex = depath ? 0 : 1
        }
        next()
    })

    router.afterEach(function ({to}) {
        console.log(`成功浏览到: ${to.path}`)
        // $.refreshScroller()
    });
}