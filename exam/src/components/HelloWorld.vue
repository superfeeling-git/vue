<template>
  <div class="hello">

    <v-nav></v-nav>

    <v-test @btnClick="showlog" v-for="(stu,i) in students" :key="stu.name" :custom="stu.name"
    class="foo"
    >
    {{i}}
    </v-test>

    <a href="" :title="person.name" v-show="hide">{{person.name}}</a>
    <br>
    
    <input type="text" value="abcde" v-model="person.name">

    <button @click="showlog('abc',$event)">test</button>

    <p>HelloWorld</p>

    <textarea v-model="students[0]"></textarea>   

    <input type="text" v-for="item in students" :key="item.name + 1"/>

    <input type="text" @input="handle"/>

    <input type="radio" :checked="hide">测试单个单选

  </div>
</template>

<script>
import vTest from './Test'
import vNav from './Nav'

export default {
  data() {
    return {
      hide:true,
      person:{
        name:"张三",
        age:20
      },
      students:[
        {
          name:"贾宝玉",
          age:30
        },{
          name:"林代玉",
          age:20
        },{
          name:"薛宝钗",
          age:40
        },
      ]
    }
  },
  components:{
    vTest,
    vNav    
  },
  methods: {
    showlog:function(parm,event){
      this.hide == false?this.hide=true:this.hide=false;
      console.log(event);
      console.log(parm);
    },
    handle:function(e)
    {
      console.log(e);
    }
  },
}
</script>