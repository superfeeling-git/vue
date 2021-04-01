import Vue from 'vue'
import Router from 'vue-router'
import Login from '../page/login'
import Default from '../page/Default'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/Default',
      name: 'Default',
      component: Default
    }
  ]
})
