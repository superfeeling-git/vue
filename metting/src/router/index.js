import Vue from 'vue'
import Router from 'vue-router'
import Login from '../page/Login'
import Home from '../page/Home'
import goods from '../page/Goods/Goods';
import goodsCreate from '../page/Goods/Create';
import goodsList from '../page/Goods/List';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [{
        path: 'goods',
        name: 'goods',
        component:goods,
        children: [
          {
            path: "Create",
            name: "Create",
            component: goodsCreate
          },
          {
            path: "List",
            name: "List",
            component: goodsList
          }
        ]
      }]
    }
  ]
})