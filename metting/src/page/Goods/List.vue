<template>
  <div>列表</div>
</template>

<script>
import axios from 'axios';
export default {
  mounted() {
    axios
      .get("http://api.metting.com:14267/api/Goods/GetAll", {
        withCredentials: true,
        headers:{
            "Authorization":`bearer ${localStorage.getItem("token")}`
        }
      })
      .then(data=>{
          console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>