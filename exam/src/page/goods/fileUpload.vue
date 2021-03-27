<template>
<div>
    <form>
        <input type="text" value="" v-model="projectName" placeholder="请输入项目名称">
        <input type="file" v-on:change="getFile($event)">
        <button v-on:click="submitForm($event)">上传</button>
    </form>
</div>
</template>

<script>
import axios from 'axios'


///这个组件是用于上传bdls文件的组件
export default {
  data() {
    return {
      uploadURL: "/api/Goods/UploadFile",
      projectName: "",
      file: ""
    };
  },
  methods: {
    getFile(event) {
      this.file = event.target.files[0];
      console.log(this.file);
    },
    submitForm(event) {
      event.preventDefault();
      let formData = new FormData();
      formData.append("formFile", this.file);

      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      
      axios.defaults.baseURL = 'https://localhost:44303';

      axios({
            url:this.uploadURL,
            method:"post",
            headers:{"Content-Type": "multipart/form-data"},
            data:formData
      })
    }
  }
};
</script>