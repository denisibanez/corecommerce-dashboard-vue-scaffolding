import Router from 'vue-router'
import Home from './views/Home.vue'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/app1',
      name: 'home',
      component: Home
    },
    {
      path: '/app1/about',
      name: 'about',
      component: () => import('./components/About.vue')
    }
  ]
})
