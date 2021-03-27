<template>
    <div>
        <table>
            <tr>
                <td>商品ID</td>
                <td>分类ID</td>
                <td>商品名称</td>
                <td>商品价格</td>
                <td>发布时间</td>
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
    mounted() {
        axios
      .get('https://localhost:44303/api/Goods/GetAll')
      .then(response => {
          this.info = response.data;
          
          });


    },
}
</script>