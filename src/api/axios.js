import axios from 'axios'

import { environment } from '@/environments/environments'
// import { getItem } from '@/helpers/persistanceStorage'

axios.defaults.baseURL = environment.apiUrl

// axios.interceptors.request.use(config => {
// 	const token = getItem('accessToken')
// 	const authorizationToken = token ? `Token ${token}` : ''
// 	config.headers.Authorization = authorizationToken
// 	console.log(token)
// 	return config
// })

export default axios
