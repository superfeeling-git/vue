<template>
    <div>
        默认首页
    </div>
</template>

<script>
export default {
    mounted() {
        // 添加请求拦截器
        axios.interceptors.request.use(function (config) {
            //console.log(config);
            // 在发送请求之前做些什么
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });
        // http response 拦截器
        axios.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            //console.log(error.response);
            if (error.response) {
            switch (error.response.status) {
                case 401:
                //console.clear();                
            }
            }
            return Promise.reject(error) // 返回接口返回的错误信息
        });
    },
}
</script>