import { makeAutoObservable } from 'mobx'

class GlobalStore {
	isMobile: boolean = undefined

	constructor () {
		makeAutoObservable(this)
	}

	setIsMobile (value: boolean) {
		this.isMobile = value
	}
}

export const globalStore = new GlobalStore