import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	withCredentials: true
})

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
	config.headers.Authorization = `Bearer ${ typeof window !== 'undefined' ? localStorage.getItem('accessToken') : '' }`
	return config
})

api.interceptors.response.use((response: AxiosResponse) => response, async (error: any) => {
	const interceptedRequest = error.config
	
	if (error.response.status === 401 && interceptedRequest.isRetry !== true) {
		interceptedRequest.isRetry = true
		
		const response = await axios.get(`${ process.env.NEXT_PUBLIC_API_URL }/refresh`, { withCredentials: true })
		localStorage.setItem('accessToken', response.data.accessToken)
		return api.request(interceptedRequest)
	} else {
		throw error
	}
})

export { api }