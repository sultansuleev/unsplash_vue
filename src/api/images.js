import queryString from 'query-string'

import axios from '@/api/axios'
import { environment } from '@/environments/environments'

const getRandomPhotos = () => {
	const apiUrl = '/photos/random'
	const parsedUrl = queryString.parseUrl(apiUrl)
	const queryParams = {
		client_id: environment.accessKey,
		count: environment.count,
		...parsedUrl.query,
	}
	const stringifiedQueryParams = queryString.stringify(queryParams)
	const urlWithParams = `${parsedUrl.url}?${stringifiedQueryParams}`

	return axios.get(urlWithParams)
}

export default { getRandomPhotos }
