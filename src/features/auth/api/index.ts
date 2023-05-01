import axios from 'axios'
import { api } from '../../../shared/api'
import { User } from 'entites/user/model'

export interface AuthResponse {
	user: User
	accessToken: string
}

class AuthService {
	async register (data: { email: string, password: string, name: string }) {
		const response = await api.post<AuthResponse>('/auth/register', data)

		return response
	}

	async login (data: { email: string, password: string }) {
		const response = await api.post<AuthResponse>('/auth/login', data)

		return response
	}

	async logout () {
		const response = await api.get<void>(`${ process.env.NEXT_PUBLIC_API_URL }/auth/logout`, { withCredentials: true })

		return response
	}

	async refresh () {
		const response = await axios.get<AuthResponse>(`${ process.env.NEXT_PUBLIC_API_URL }/auth/refresh`, { withCredentials: true })

		return response
	}
}

export const authService = new AuthService