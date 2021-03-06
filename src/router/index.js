import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import TourViews from '../views/TourViews'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/tour/:id',
        name: 'tour',
        component: TourViews
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router