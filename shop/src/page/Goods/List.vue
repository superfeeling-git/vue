<template>
    <div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-cascader
                :value="formInline.categoryId"
                :options="options"
                placeholder="请选择分类"
                @change="handleChange"
                clearable
                >
            </el-cascader>
            <el-form-item label="商品名称">
                <el-input v-model="formInline.goodsName" placeholder="审批人"></el-input>
            </el-form-item>           
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
          <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
            label="商品ID"
            width="180">
            <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">
                    {{scope.row.goodsId}}
                </span>
            </template>
            </el-table-column>
            <el-table-column
            prop="categoryId"
            label="分类ID"
            width="180">
            </el-table-column>
            <el-table-column
            prop="categoryName"
            label="分类名称"
            width="180">
            </el-table-column>
            <el-table-column
            prop="goodsName"
            label="商品名称">
            </el-table-column>
            <el-table-column
            prop="goodsPrice"
            label="商品价格">
            </el-table-column>
            <el-table-column
            prop="addTime"
            label="添加时间">
            </el-table-column>
            <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
        <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        @current-change="changePage"
        >
        </el-pagination>
    </div>
</template>

<script>
import {GoodsPage,GetAllCategory} from '../../util/apis'
export default {
    data() {
        return {
            tableData:[],
            total:0,
            formInline: {
                pageIndex: 1,
                goodsName: '',
                categoryId: null
            },
            options: []
        }
    },
    methods: {
        changePage(page){
            this.formInline.pageIndex = page;
            GoodsPage(this.formInline).then(d=>{
            this.tableData = d.data.item1;
            this.total = d.data.item2;
        }) 
        },
        handleChange(value) {
            this.formInline.categoryId = value.slice(-1)[0];
        },
        onSubmit() {
            GoodsPage(this.formInline).then(d=>{
                this.tableData = d.data.item1;
                this.total = d.data.item2;
            })
        },
        handleDelete(i,d){
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.tableData = this.tableData.filter((v,index) => index != i );
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
            this.$message({
                type: 'info',
                message: '已取消删除'
            });
        });
        },
        handleEdit(i,d){
            let com = this.$parent;
            //向父组件传值
            this.$emit('customerClick',com.name,d)
        }
    },
    mounted() {
        GoodsPage().then(d=>{
            this.tableData = d.data.item1;
            this.total = d.data.item2;
        });
        
        GetAllCategory().then(d=>{
            this.options = d.data;
        });
    },
}
</script>