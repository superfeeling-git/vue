<template>
    <div>
        <el-col :span="14">
            <el-form :model="form" :rules="rules" ref="form" label-width="180px">
                <el-form-item label="商品分类">
                    <el-cascader
                        v-model="form.value"
                        :options="form.options"
                        placeholder="做为一级分类"
                        @change="handleChange">
                    </el-cascader>
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
                <el-form-item label="图片上传">
                  <el-upload
                    class="avatar-uploader"
                    :action="form.actions"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    name="formFile"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
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
.el-cascader{display: block;}
</style>

<!--上传文件样式-->
<style>
  .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .el-upload:hover {
    border-color: #409EFF!important;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

<script>
import baseUrl from '../../util/evns'
import {GetAllCategory} from '../../util/apis'

  export default {
    data() {
      return {
        form: {
          categoryId: '',
          goodsId: '',
          goodsName: '',
          goodsPrice: 1,
          addTime: '',
          value:[],
          options: [],
          imageUrl:"",
          actions:`${baseUrl.baseUrl}Goods/UploadFile`
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
      },
      handleChange(value) {
        console.log(value);
      },
      handleAvatarSuccess(res, file, fileList) {
        this.form.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    },mounted() {
      GetAllCategory().then(d=>{
        this.form.options = d.data;
      });
    },
  }
</script>