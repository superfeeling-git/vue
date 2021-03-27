<template>
    <div>
        <page-head></page-head>
        <div>
            <el-table
                :data="tableData"
                stripe
                style="width: 100%">
                <el-table-column
                prop="blogID"
                label="博客ID"
                width="180">
                </el-table-column>
                <el-table-column
                prop="blogTitle"
                label="博客标题"
                width="180">
                </el-table-column>
                <el-table-column
                prop="content"
                label="博客内容"
                width="180">
                </el-table-column>
                <el-table-column
                prop="addTime"
                label="时间"
                >
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import pageHead from "@/components/pageHead"
import axios from 'axios'
export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        tableData: [{
                    blogID:1,
                    blogTitle:"标题",
                    content:"内容"
                }]
      }
    },
    components: {
    	pageHead
    },
    methods: {
        tt:function(){
            console.log(this.$router);
        },
        onSubmit() {
        console.log('submit!');
      }
    },
    mounted() {
        var obj = this;
        axios.get('https://localhost:44371/api/Blog/List')
        .then(function (response) {
            obj.tableData = response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
    },
}
</script>