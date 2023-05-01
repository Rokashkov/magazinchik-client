import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { authStore } from 'entites/auth/model'
import { userStore } from 'entites/user/model'
import { AuthResponse } from 'features/auth/api'

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	withCredentials: true
})

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
	config.headers.Authorization = `Bearer ${ authStore.accessToken ?? '' }`

	return config
})

api.interceptors.response.use((response: AxiosResponse) => response, async (error: any) => {
	const interceptedRequest = error.config
	
	if (error.response.status === 401 && interceptedRequest.isRetry !== true) {
		interceptedRequest.isRetry = true
		const response = await axios.get<AuthResponse>(`${ process.env.NEXT_PUBLIC_API_URL }/refresh`, { withCredentials: true })
		const { accessToken, user } = response.data
		authStore.setIsAuth(true)
		authStore.setAccessToken(accessToken)
		userStore.setUser(user)
		
		return api.request(interceptedRequest)
	} else {
		throw error
	}
})

export { api }