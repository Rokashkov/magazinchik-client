import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { AxiosError } from 'axios'
import { authStore } from 'features/auth/store'
import { Auth } from './types/Auth'
import { userStore } from 'entities/user'

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	withCredentials: true
})

const reqOnFullfilled = async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
	config.headers.Authorization = `Bearer ${ authStore.accessToken ?? '' }`

	return config
}

const resOnFullfield = async (response: AxiosResponse): Promise<AxiosResponse> => response

const resOnRejected = async (error: AxiosError): Promise<AxiosResponse> => {
	const interceptedRequest = error.config as typeof error.config & { isRetry: boolean }
	
	if (error.response.status === 401 && interceptedRequest.isRetry !== true) {
		interceptedRequest.isRetry = true
		const response = await axios.get<Auth>(`${ process.env.NEXT_PUBLIC_API_URL }/refresh`, { withCredentials: true })
		const { accessToken, user } = response.data
		authStore.setIsAuth(true)
		authStore.setAccessToken(accessToken)
		userStore.setUser(user)
		
		return api.request(interceptedRequest)
	} else {
		throw error
	}
}

api.interceptors.request.use(reqOnFullfilled)

api.interceptors.response.use(resOnFullfield, resOnRejected)

const clearApi = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	withCredentials: true
})

export { api, clearApi }