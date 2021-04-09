<template>
  	<div class="login_page">
	  	<el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>后台管理登录</span>
        </div>
        <div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :label-position="labelPosition" label-width="80px" >
                <el-form-item label="邮箱" prop="Email">
                    <el-input v-model="ruleForm.Email"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="Password">
                    <el-input v-model="ruleForm.Password"  show-password></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="ValidateCode">
                  <el-col :span="11">
                    <el-input v-model="ruleForm.ValidateCode"></el-input>
                  </el-col>
                  <el-col :span="1">
                    &nbsp;
                  </el-col>
                  <el-col :span="8">
                    <img src="http://api.a.com:63846/api/Account/GenerCode" height="30">
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
import axios from 'axios';

let fun1 = async function (){
  return await 123;
}

async function fun2(){
  await fun1();
}

export default {
  data() {

    return {
      labelPosition: 'left',
      ruleForm: {
        Email: '',
        Password: '',
        ValidateCode: ''
      },
      resultInfo:null,
      rules:{
        Email: [
          { required: true, message: '请输入邮箱或用户名', trigger: 'blur' },
          { min: 3, message: '长度在 3 到 5 个字符', trigger: 'blur' },
          { type: "email", message: '请输入合法的Email', trigger: 'blur' }
        ],
        Password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        ValidateCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 3, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    async submitForm(formName) {
      var formData = {
              Email:this.ruleForm.Email,
              Password:this.ruleForm.Password,
              ValidateCode:this.ruleForm.ValidateCode
          };

      this.$refs[formName].validate((valid) => {    
        if (valid) {

          var _this = this;

          //console.log(formData);

          //如果需要在跨域请求时携带Cookies，需要设置此项
          //axios.defaults.withCredentials=true;
          
          axios.defaults.baseURL = 'http://api.a.com:63846';
          axios({
          url:'/api/Account/Login',
          method:'post',
          responseType:'json',
          data:formData,
          withCredentials: true
          }).then(response => {
            if(response.data.status > 0){
              this.$message({
                showClose: true,
                message: response.data.msg,
                type: 'warning'
              });
            }else{
              window.localStorage.setItem("expires",response.data.expires);
              window.localStorage.setItem("token",response.data.jwt);
              this.$router.push({ path: 'home' });
            }
          }).catch(function(error){
            console.log(error);
          });
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
  mounted() {
      
  },
}
</script>