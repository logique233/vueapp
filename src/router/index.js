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
    path: '/iview',
    name: 'iview',
    component: () => import('../views/iview.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
