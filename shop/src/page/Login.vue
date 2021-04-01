<template>
  	<div class="login_page">
	  	<el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>后台管理登录</span>
        </div>
        <div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :label-position="labelPosition" label-width="80px" >
                <el-form-item label="名称" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                    <el-input v-model="ruleForm.region"></el-input>
                </el-form-item>
                <el-form-item label="验证码">
                  <el-col :span="11">
                    <el-input v-model="ruleForm.type"></el-input>
                  </el-col>
                  <el-col :span="1">
&nbsp;
                  </el-col>
                  <el-col :span="8">
                    <img src="https://localhost:44365/Admin/Account/GenerCode" height="30">
                  </el-col>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
        </el-card>
  	</div>
</template>

<style scoped>
.login_page{
    height: 100%;
    background: coral;
    overflow: hidden;
}
.box-card{
    width: 30%;
    margin: 0 auto;
    margin-top: 200px;
}
img{
  margin-top: 6px;
}
</style>

<script>
  export default {
    data() {

      return {
        labelPosition: 'left',
        ruleForm: {
          name: '',
          region: '',
          type: ''
        },
        rules:{
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          console.log(valid);
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
  }
</script>