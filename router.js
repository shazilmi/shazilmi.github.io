import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import MyComponent from 'my-component.js'
import Home from 'home.js'

const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes : [
        {
            path: '/home',
            name: 'Home',
            component : Home,
    },
        {
            path : '/',
            name: 'Index',
            component : MyComponent,
        }
    ]
})


export default router