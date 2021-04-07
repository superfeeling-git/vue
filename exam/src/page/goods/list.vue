<template>
    <div>
        <table>
            <tr>
                <td>商品ID</td>
                <td>分类ID</td>
                <td>商品名称</td>
                <td>商品价格</td>
                <td>发布时间</td>
                <td>修改</td>
            </tr>
            <tr v-for="item in info" :key="item.goodsId">
                <td>
                    {{item.goodsId}}
                </td>
                <td>
                    {{item.categoryId}}
                </td>
                <td>
                    {{item.goodsName}}
                </td>
                <td>
                    {{item.goodsPrice}}
                </td>
                <td>
                    {{item.addTime}}
                </td>
                <td>                    
                    <a href="javascript:void(0)" @click="$router.push('edit/' + item.goodsId)">删除</a>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            info:null
        }
    },
    methods: {
        redirect:function(e){
            console.log(3);
            this.$router.push({ path: 'edit/3' })
        }
    },
    mounted() {
        axios
      .get('http://api.a.com:63846/api/Goods/GetAll')
      .then(response => {
          this.info = response.data;          
        });
    },
}
</script>