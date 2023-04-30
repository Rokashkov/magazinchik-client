import { AxiosResponse } from 'axios'
import { api } from '.'

type UserResponse = {
	id: number
	name: string
	email: string
	createdAt: Date
	updatedAt: Date
}[]

class UserService {
	async getAllUsers (): Promise<AxiosResponse<UserResponse>> {
		const response = await api.get<UserResponse>('/user')

		return response
	}
}

export const userService = new UserService