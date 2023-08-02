import type { AxiosError } from 'axios'

import axios from 'axios'

const request = axios.create({
  baseURL: import.meta.env.DEV ? import.meta.env.VITE_BASE_URL : location.origin,
  timeout: 10000,
})

request.interceptors.request.use((config) => {
  return config
})

request.interceptors.response.use(
  (response) => {
    const result = response.data.data
    return result
  }, (error: AxiosError) => {
    return Promise.reject(error)
  })

export default request

// 处理错误响应
