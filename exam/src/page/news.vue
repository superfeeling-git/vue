<template>
    <div>
        <v-menu></v-menu>
        新闻中心
        {{abc}}
        <router-view></router-view>
    </div>
</template>
<script>
import vMenu from '../components/Nav'
import bus from '../util'

export default {
    components:{
        vMenu
    },
    data() {
        return {
            abc:"123"
        }
    },
    methods: {
        Handleinput:function(param,event){
            console.log(event);
            this.abc = param;
        }
    },
    mounted() {
        let _this = this;
        bus.$on("on-input",function(msg){
            console.log("abce");
            _this.abc = msg;
        })
    },
}
</script>