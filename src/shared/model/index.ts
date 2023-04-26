import { makeAutoObservable } from 'mobx'

class GlobalStore {
	path: string = undefined

	constructor () {
		makeAutoObservable(this)
	}

	setPath (path: string) {
		this.path = path
	}
}

export const globalStore = new GlobalStore