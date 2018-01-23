import axios from 'axios'
axios.defaults.baseURL = 'http://47.96.21.88:8888/api/private/v1/'
axios.interceptors.request.use(function (config) {
  let token = localStorage.getItem('mytoken')
  if (token) {
    config.headers['Authorization'] = token
  }
  return config
}, function (error) {
  return Promise.reject(error)
})
export const login = (params) => {
  return axios.post('login', params).then(res => {
    return res.data
  })
}
export const testData = (params) => {
  return axios.get('users', {params: params}).then(res => {
    return res.data
  })
}
