import axios from "axios";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // baseurl 示例:https://baidu.com
  // withCredentials: true, //配置携带跨域cookie 可能会导致跨域问题,这里的功能是跨域的情况下也可以携带cookie 但是 如果后台没有配置 可能会产生跨域的情况
  timeout: 5000 // 超时限制
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 设置请求头token
    // const token = store.getters.token;
    // if (token) {
    //   config.headers["Authorization"] = `Bearer ${token}`;
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器(异常判断可以忽略)
service.interceptors.response.use(
  async response => {
    const { data } = response;
    return data;
  },
  async error => {
    return Promise.reject(error);
  }
);

export default service;
