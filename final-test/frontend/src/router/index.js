import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Main
    }
    // 后续可加更多路由，例如 /admin
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
