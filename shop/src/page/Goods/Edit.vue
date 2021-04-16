<template>
    <div>
        <el-col :span="14">
            <el-form :model="form" :rules="rules" ref="form" label-width="180px">
                <el-form-item label="商品分类">
                    <el-cascader
                        :value="form.categoryId"
                        :options="config.options"
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
                    :action="config.actions"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    name="formFile"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="config.imageUrl" :src="config.imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </el-form-item>
                <el-form-item label="商品介绍">
                  <div id="Content">
                      
                  </div>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
                    <el-button @click="resetForm('form')">重置</el-button>
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
import {GetAllCategory,GoodsGet,GoodsUpdate} from '../../util/apis'
import wangEditor from 'wangeditor'

  export default {
    data() {
      return {
        form: {
          categoryId: 0,
          goodsId: 0,
          goodsName: '',
          goodsPrice: 1,
          addTime: '',       
          goodsPic:"",
          Content:""
        },
        config:{
          categoryPath:[],
          imageUrl:"",
          options: [],
          actions:`${baseUrl.baseUrl}Goods/UploadFile`,
          editor: null
        },
        rules:{
            goodsName: [
                { required: true, message: '请输入活动名称', trigger: 'blur' },
                { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ]
        }
      }
    },
    props:['myProp'],
    methods: { 
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.form.Content=this.config.editor.txt.html();
            GoodsUpdate(this.form).then(d=>{
              if(d.data >= 1){
                this.$refs[formName].resetFields();
                this.$message({
                  message: '更新商品成功',
                  type: 'success',
                  onClose:o=>{
                      this.$emit('customerClick',this.$parent.name,"GoodsList")
                  }
                });
                
              }
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        this.config.imageUrl = null;
        this.config.editor.txt.clear();
        this.form = this.$options.data().form // 重置data中的 某个form表单
      },
      handleChange(value) {
        this.form.categoryId = value.slice(-1)[0];
      },
      handleAvatarSuccess(res, file, fileList) {
        this.form.goodsPic = res.file;
        this.config.imageUrl = URL.createObjectURL(file.raw);
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
    },
    mounted() {
      GetAllCategory().then(d=>{
        this.config.options = d.data;
      });

      const editor = new wangEditor(`#Content`)
      
      // 创建编辑器
      editor.create()
      this.config.editor = editor

      let goodsid = this.myProp.goodsId;

      console.log(goodsid);

      GoodsGet({id:goodsid}).then(d=>{
          this.form = d.data;
          this.form.categoryPath = d.data.categoryPath;
          this.config.imageUrl = `${baseUrl.baseUrl.replace("api/","")}${d.data.goodsPic}`;
          editor.txt.html(d.data.content)
      });
    },
    beforeDestroy() {
      // 调用销毁 API 对当前编辑器实例进行销毁
      this.config.editor.destroy()
      this.config.editor = null
    },
  }
</script>



