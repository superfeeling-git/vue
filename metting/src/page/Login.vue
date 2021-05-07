<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>后台管理员登录</span>
      </div>
      <div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          class="demo-ruleForm"
          label-width="100px"
        >
          <el-form-item label="用户名" prop="Email">
            <el-input v-model="ruleForm.Email"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="Password">
            <el-input v-model="ruleForm.Password" show-password></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="ValidateCode">
            <el-col :span="14">
              <el-input v-model="ruleForm.ValidateCode"></el-input>
            </el-col>
            <el-col :span="10">
              <img src="http://api.metting.com:14267/api/Account/GenerCode" />
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >登录</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
img {
  height: 40px;
}
.box-card {
  width: 30%;
  margin: 0px auto;
  margin-top: 10%;
}
.login {
  background: rgb(186, 214, 219);
  height: 100%;
  overflow: hidden;
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      ruleForm: {
        Email: "",
        Password: "",
        ValidateCode: "",
      },
      rules: {
        Email: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        Password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        ValidateCode: [
          { required: true, message: "请输入验证码", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      console.log(this.ruleForm);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios
            .post(
              "http://api.metting.com:14267/api/Account/Login",
              this.ruleForm,
              {
                withCredentials: true,
              }
            )
            .then((responseData) => {
              let resultData = responseData.data;
              if (resultData.code > 0) {
                this.$message({
                  message: responseData.data.msg,
                  type: "warning",
                });
              }else{
                  let token = resultData.token;
                  localStorage.setItem("token",token);
                  this.$router.push('home');
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      //this.$refs[formName].resetFields();

      this.$router.push('home');
    },
  },
  mounted() {
    //console.log(process.env.NODE_ENV);
  },
};
</script>