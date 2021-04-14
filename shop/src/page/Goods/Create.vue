<template>
    <div>
        <el-col :span="14">
            <el-form :model="form" :rules="rules" ref="form" label-width="180px">
                <el-form-item label="商品分类">
                    <el-select v-model="form.categoryId" placeholder="请选择所属分类">
                    </el-select>
                </el-form-item>
                <el-form-item label="商品名称" prop="goodsName">
                    <el-input v-model="form.goodsName" placeholder="请输入内容"></el-input>
                </el-form-item>
                <el-form-item label="商品价格">
                    <el-input-number v-model="form.goodsPrice" :precision="2" :step="0.1" :max="10"></el-input-number>
                </el-form-item>
                <el-form-item label="添加时间">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.addTime" style="width: 100%;"></el-date-picker>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </div>
</template>

<style scoped>
.el-select{display: block;}
</style>

<script>
  export default {
    data() {
      return {
        form: {
          categoryId: '',
          goodsId: '',
          goodsName: '',
          goodsPrice: 1,
          addTime: ''
        },
        rules:{
            goodsName: [
                { required: true, message: '请输入活动名称', trigger: 'blur' },
                { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ]
        }
      }
    },
    methods: { 
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>