import Vue from 'vue'
import Router from 'vue-router'
import Login from '../page/login'
import Home from '../page/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    }
  ]
})
