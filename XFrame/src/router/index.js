import Vue from 'vue'
import Router from 'vue-router'
import Manage from '../page/Manage'
import Index from '../page/Index'
import Create from '../page/Create'
import List from '../page/List'    //两种路径方式
//import Login from '@/page/login'  --两种路径方式

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Manage',
      component: Manage,
      children: [
        {
          path: 'List',
          component: List
        },{
          path: 'Create',
          component: Create
        }
      ]
    },{
      path: '/Index',
      name: 'Index',
      component: Index
    }
  ]
})
