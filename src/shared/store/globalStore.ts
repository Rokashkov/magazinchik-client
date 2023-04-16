import { makeAutoObservable } from 'mobx'

class GlobalStore {
	isMobile: boolean

	constructor () {
		makeAutoObservable(this)
	}

	setIsMobile (value: boolean) {
		this.isMobile = value
	}
}

export const globalStore = new GlobalStore