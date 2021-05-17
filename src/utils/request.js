import axios from 'axios';
import onMessage from "./message";

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
  withCredentials: true, // 跨域请求时发送 cookies
  timeout: 5000 // request timeout
})

//请求拦截
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)

//响应拦截
service.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    onMessage('error');
    return Promise.reject(error);
  }
)