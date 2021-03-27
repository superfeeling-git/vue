import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import forms from '@/page/forms'
import about from '@/page/about'
import news from '@/page/news'
import goods from '../page/goods/goods'
import list from '@/page/goods/list'
import add from '@/page/goods/add'
import fileupload from '../page/goods/fileUpload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/abc/tt/',
      name: 'forms',
      component: forms
    },{
      path:'/news',
      component:news,
      children:[{
          path:'about',
          component:about
      }]
    },{
      path:'/goods',
      component:goods,
      children:[
        {
          path:'list',
          component:list
        },
        {
          path:'add',
          component:add
        },
        {
          path:'fileupload',
          component:fileupload
        }
      ]
    }
  ]
})
