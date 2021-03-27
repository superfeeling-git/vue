<template>
    <div>
        <v-nav></v-nav>

        路由：<br>
        {{$route.params.id}}
        <div>
            <label v-for="item in persons" :key="item.name">
                {{item.name}}
                <input type="radio" :value="item.name" v-model="picked">
            </label>
            
        </div>


        <input type="text" v-model="picked">

        <input type="checkbox" v-model="checked"/>

        <select v-model="picked">
            <option  v-for="item in persons" :key="item.name" :value="item.name">
                {{item.name}}
            </option>
        </select>

    </div>
</template>

<script>
import vNav from '../components/Nav'
export default {
    data() {
        return {
            checked:true,
            picked:"李四",
            persons:[
                {
                name:"张三",
                age:20
                },{
                name:"李四",
                age:20
                },{
                name:"王五",
                age:20
                }
            ]
        }
    },
    methods: {
        selectRadio:function(e){
            
        }
    },
    components:{
        vNav
    },
    mounted() {
        
    },
}
</script>