import { makeAutoObservable } from 'mobx'

class GlobalStore {
	isMobile: boolean = undefined
	isLaunched = false

	constructor () {
		makeAutoObservable(this)
	}

	setIsMobile (value: boolean) {
		this.isMobile = value
	}

	setIsLaunched (value: boolean) {
		this.isLaunched = value
	}
}

export const globalStore = new GlobalStore