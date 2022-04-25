/* eslint-disable */
import axios from 'axios'
import NProgress from './nprogress'
import Vue from 'vue'
import router from '../router/index'

const http = axios.create({
    baseURL: 'http://localhost:3000/admin/api', // /admin/api
    timeout: 20 * 1000, // Timeout
})

// http request 拦截器
http.interceptors.request.use(
    config => {
        NProgress.start()
        if (localStorage.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = 'Bearer ' + localStorage.token
        }
        process.env.NODE_ENV === 'development' && console.log(config);
        return config;
    },
    err => {
        return Promise.reject(err);
    });

//http response 拦截器,路由失效时重新跳转到登录界面
http.interceptors.response.use(
    response => {
        NProgress.done()
        process.env.NODE_ENV === 'development' && console.log(response);
        return response;
    },
    err => {
        NProgress.done()
        process.env.NODE_ENV === 'development' && console.log(err);
        if (err.response.data.message) {
            Vue.prototype.$message.error(err.response.data.message)

            if (err.response.status === 401) {//退出登陆跳转
                router.push('/login')
            }
        }
        return Promise.reject(err)
    }
);

export default http;