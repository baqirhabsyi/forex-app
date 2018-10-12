import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.exchangeratesapi.io/',
  timeout: 10000,
})

export default instance
