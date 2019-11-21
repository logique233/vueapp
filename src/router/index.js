import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/subnav',
    name: 'subnav',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Subnav.vue')
  },
  {
    path: '/iview',
    name: 'iview',
    component: () => import('../views/iview.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
