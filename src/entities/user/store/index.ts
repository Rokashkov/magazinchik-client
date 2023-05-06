import { makeAutoObservable } from 'mobx'
import { User } from 'shared/api/types/User'

class UserStore implements User {
	id: number = undefined
	email: string = undefined
	name: string = undefined

	constructor () {
		makeAutoObservable(this)
	}

	setUser (user: User) {
		const { id, name, email } = user
		this.id = id
		this.name = name
		this.email = email
	}
}

export const userStore = new UserStore