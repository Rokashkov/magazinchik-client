import { makeAutoObservable } from 'mobx'

class AuthStore {
	isAuth: boolean = undefined
	accessToken: string = undefined
	email: string = undefined
	name: string = undefined
	password: string = undefined

	constructor () {
		makeAutoObservable(this)
	}

	setIsAuth (value: boolean) {
		this.isAuth = value
	}

	setEmail (email: string) {
		this.email = email
	}

	setName (name: string) {
		this.name = name
	}

	setPassword (password: string) {
		this.password = password
	}

	setAccessToken (accessToken: string) {
		this.accessToken = accessToken
	}
}

export const authStore = new AuthStore