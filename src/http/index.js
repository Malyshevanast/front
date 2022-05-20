import axios from "axios";

const API_URL = "http://localhost:8080/api"
const token = localStorage.getItem("token")
const $api = axios.create({
   withCredentials: true,
   baseURL: API_URL
})

$api.interceptors.request.use((config) => {
   config.headers.Authorization = `Bearer ${token}`

   return config
})

export default $api