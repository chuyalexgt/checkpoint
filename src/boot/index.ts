// Axios
import axios from 'axios'
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // baseURL: 'https://meddi.app',
})
api.interceptors.response.use((response) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, (error) => {
  if (error.response.status === 401) {
    localStorage.removeItem('userJwt')
    window.location.replace('auth/login')
  }

  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

export { api }
