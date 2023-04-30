import axios, { AxiosResponse } from 'axios'
import { api } from '.'

interface AuthResponse {
	user: {
		id: number
		name: string
		email: string
	}
	accessToken: string
}

class AuthService {
	async register (requestData: { email: string, password: string, name: string }): Promise<AxiosResponse<AuthResponse>> {
		const response = await api.post<AuthResponse>('/auth/register', requestData)

		return response
	}

	async login (requestData: { email: string, password: string }): Promise<AxiosResponse<AuthResponse>> {
		const response = await api.post<AuthResponse>('/auth/login', requestData)

		return response
	}

	async refresh () {
		const response = await axios.get<AuthResponse>(`${ process.env.NEXT_PUBLIC_API_URL }/auth/refresh`, { withCredentials: true })

		return response
	}
}

export const authService = new AuthService