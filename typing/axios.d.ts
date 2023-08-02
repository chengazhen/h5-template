import { AxiosError } from 'axios'
declare module 'axios' {
  interface AxiosError {
    code?: string
    message?: string
    data?: any
  }
}
