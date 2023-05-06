import { makeAutoObservable } from 'mobx'

class AuthStore {
	isAuth: boolean = undefined
	accessToken: string = undefined
	name: string = undefined
	email: string = undefined
	password: string = undefined
	isLoading = false

	constructor () {
		makeAutoObservable(this)
	}

	setIsAuth (value: boolean) {
		this.isAuth = value
	}

	setAccessToken (accessToken: string) {
		this.accessToken = accessToken
	}

	setName (name: string) {
		this.name = name
	}

	setEmail (email: string) {
		this.email = email
	}

	setPassword (password: string) {
		this.password = password
	}

	setIsLoading (value: boolean) {
		this.isLoading = value
	}
}

export const authStore = new AuthStore