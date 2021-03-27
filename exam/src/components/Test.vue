<template>
    <div class="zoo">        
        <button @click="ShowLog">{{custom}}</button>
        {{test}}<br>
        <p>Original message: "{{ message }}"</p>
        <p :class="classObj">Computed reversed message: "{{ reversedDate }}"</p>

        <slot></slot>
    </div>
</template>

<style scoped>
p.red{
    color: red;
}
</style>

<script>
export default {
    props:{
        custom:{
            type:String,
            default:"这是默认值"
        }
    },
    data() {
        return {            
            message: 'Hello',
            classObj:{
                isActive:true,
                red:true
            }
        }
    },
    methods: {
        ShowLog:function() {
            //this.custom = "自定义按钮";
            this.$emit("btnClick",this.custom);
            console.log("aaaaa");
        },
        reversedMessage: function () {
            return Date.now()
        }
    },
    computed:{
        test:function() {
            return "12345";
        },
        reversedDate: function () {
            return Date.now()
        }
    },
    beforeCreate() {
        console.log("beforeCreate");
    },
    created() {
        console.log("created");
        //console.log(this.custom);
    },
    mounted() {
        console.log("mounted");
        //console.log(this.custom);        
    },
}
</script>