import {
    createRouter,
    createWebHistory
} from "vue-router";
import TheManual from './components/TheManual.vue'
import TheLogin from './components/TheLogin.vue'
import TheRegister from './components/TheRegister.vue'
import NotFound from './components/NotFound.vue'
import TheAbout from './components/TheAbout.vue'
import TheServices from './components/TheServices.vue'
// import TheForgot from './components/TheForgot.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/manual',
            component: TheManual
        },
        {
            path: '/service',
            component: TheServices
        },
        {
            path: '/login',
            component: TheLogin,
        },
        // {
        //     path: '/forgot',
        //     component: TheForgot
        // },
        {
            path: '/register',
            component: TheRegister
        },
        {
            path: '/about',
            component: TheAbout
        }, {
            path: '/:notFound(.*)',
            component: NotFound
        }
    ]
})

export default router