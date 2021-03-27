<template>
    <div>
        <table>
            <tr>
                <td>商品分类：</td>
                <td>
                    <input v-model="categoryId"/>
                </td>
            </tr>
            <tr>
                <td>商品名称：</td>
                <td>
                    <input v-model="goodsName"/>                    
                </td>
            </tr>
            <tr>
                <td>商品图片：</td>
                <td>
                    <input v-model="goodsPic"/>                    
                </td>
            </tr>
            <tr>
                <td>商品价格：</td>
                <td>
                    <input v-model="goodsPrice"/>                    
                </td>
            </tr>
            <tr>
                <td>发布时间</td>
                <td>
                    <input v-model="addTime" size="40"/>                    
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <button type="button" @click="Save">提交</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';

export default {
    data() {
        return {
            goodsName:"VUE",
            goodsPic:"无",
            goodsPrice:"999",
            addTime:'2021-03-27 01:46:04',
            categoryId:2
        }
    },
    methods: {
        Save:function(e){
            //axios.defaults.headers.post['Content-Type'] = 'x-www-form-urlencoded';
            //axios.defaults.headers.post['Content-Type'] = 'application/json';

            var formData = {
                    goodsName:this.goodsName,
                    goodsPic:this.goodsPic,
                    goodsPrice:this.goodsPrice,
                    addTime:new Date(Date.parse(this.addTime.replace(/-/g, "/"))),
                    categoryId:this.categoryId
                };

            //axios.post("https://localhost:44303/api/Goods/Create",formData);
            axios.defaults.baseURL = 'https://localhost:44303';
            axios({
                url:'/api/Goods/Create',
                method:'post',
                //responseType:'json',
                data:formData
                }).then(function(response){
                    console.log(response.data);
                }).catch(function(error){
                    console.log(error);
                })
        }
    },
    mounted() {
        console.log(process.env.NODE_ENV);
        console.log(process.env.BASE_URL);
    },
}
</script>