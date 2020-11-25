import Vue from 'vue'
import Axios from 'axios'
const axios = Axios.create({
    baseURL: '/api',
    timeout: 1000,
  });


// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (res) {
    // 对响应数据做点什么
    if(res.status ==  200){
        return res.data
    }else{
        //对错误信息做点什么
        return res;
    }
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

Vue.prototype.$http = axios 
