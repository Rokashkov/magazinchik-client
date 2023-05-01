import { makeAutoObservable } from 'mobx'
import { User } from './User'

class UserStore {
	user = {} as User

	constructor () {
		makeAutoObservable(this)
	}

	setUser (user: User) {
		this.user = user
	}
}

export const userStore = new UserStore