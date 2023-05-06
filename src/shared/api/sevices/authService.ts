import axios from 'axios'
import { api } from '..'
import { Auth } from '../types/Auth'

class AuthService {
	async register (data: { email: string, password: string, name: string }) {
		const response = await api.post<Auth>('/auth/register', data)

		return response
	}

	async login (data: { email: string, password: string }) {
		const response = await api.post<Auth>('/auth/login', data)

		return response
	}

	async logout () {
		const response = await api.get<void>(`${ process.env.NEXT_PUBLIC_API_URL }/auth/logout`, { withCredentials: true })

		return response
	}

	async refresh () {
		const response = await axios.get<Auth>(`${ process.env.NEXT_PUBLIC_API_URL }/auth/refresh`, { withCredentials: true })

		return response
	}
}

export const authService = new AuthService