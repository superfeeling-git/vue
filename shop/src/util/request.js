import axios from 'axios';
import baseUrl from './evns';

export default async(url = '', data = {}, type = 'GET') => {

    // 创建一个axios实例
    const instance = axios.create({
        baseURL: baseUrl.baseUrl,
        timeout: 300000,    
        headers: {
        'Content-Type': 'application/json',
        'Authorization': "bearer " + window.localStorage.getItem('token')
        }
    })

    // 给实例添加一个setToken方法，用于登录后将最新token动态添加到header，同时将token保存在localStorage中
    instance.setToken = (token) => {
        instance.defaults.headers['Authorization'] = token
        window.localStorage.setItem('token', token)
    }

    // 拦截返回的数据
    instance.interceptors.response.use(response => {
        const { code } = response.status;        
        return response
    }, error => {
        if (error.response.status === 401) {
            // 说明token过期了,刷新token
            return instance.request({
                url:'/account/refreshtoken',
                method:"post",
                data:{
                    Token:localStorage.getItem("token")
                }
            })
                .then(res => {

                    if(res.data.status > 0){
                        console.error('refreshtoken error => ',res.data.msg);

                        //刷新token失败，神仙也救不了了，跳转到首页重新登录吧
                        window.location.href = '/abc';
                    }
                    else{
                        const token = res.data.jwt
                
                        //设置Token
                        instance.setToken(token)
                        
                        // 获取当前失败的请求
                        const config = error.response.config
        
                        // 重置一下配置
                        config.headers['Authorization'] = "bearer " + token
        
                        //清除控制台错误消息
                        //console.clear();
        
                        // 重试当前请求并返回promise
                        return instance(config)
                    }
                
            }).catch(res => {
                console.error('refreshtoken error =>', res)

                //刷新token失败，神仙也救不了了，跳转到首页重新登录吧
                window.location.href = '/'
            })
        }

        return Promise.reject(error)
    })

    return await instance.request({
        url:url,
        data:data,
        method:type
    });
}