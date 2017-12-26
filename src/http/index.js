import axios from 'axios'

export const http = axios.create({
  baseURL: 'http://localhost:8989/ecommerce/api/v1/'
})
