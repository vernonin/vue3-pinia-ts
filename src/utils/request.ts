import axios from "axios";


/* 实例化请求配置 */
const instance = axios.create({
	baseURL: '',
  // 请求时长
  timeout: 5000,
})


instance.interceptors.request.use(
  config => config
)


instance.interceptors.response.use(
  res => res.data
)

export default instance
