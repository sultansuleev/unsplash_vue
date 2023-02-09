import axios from 'axios'

import { environment } from '@/environments/environments'

axios.defaults.baseURL = environment.apiUrl

export default axios
