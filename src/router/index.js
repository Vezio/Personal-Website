import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Splash',
            component: () => import('../components/Splash/Splash.vue')
        },
        {
            path: '/compiler',
            name: 'Compiler',
            component: () => import('../components/Compiler/Compiler.vue')
        },
        {
            path: '/*',
            redirect: '/'
        }
    ]
})