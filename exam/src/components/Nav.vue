<template>
    <div>
        <router-link :to="{name:'HelloWorld'}">首页</router-link>
        <router-link :to="{name:'forms',params:{id:'abc'}}">forms</router-link>
        <router-link to="/HelloWorld/about">关于我们</router-link>
        <router-link to="/goods/list">商品列表</router-link>
        <router-link to="/goods/add">商品添加</router-link>
        {{$route.params.id}}
        <a href="javascript:void(0)" @click="modelClick('传值',$event)">测试</a>
  
    </div>
</template>

<script>
import bus from '../util'
export default {
    props:{
        abc:{
            type:String
        }
    },
    data() {
        return {
            stuName:"张三"
        }
    },
    methods: {
        modelClick:function(v,e){            
            //console.log(v);
            bus.$emit("on-input",v);
        }
    },  
}
</script>