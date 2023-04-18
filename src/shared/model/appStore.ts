import { makeAutoObservable } from 'mobx'

class AppStore {
	isMobile: boolean = undefined
	isLaunched = false

	constructor () {
		makeAutoObservable(this)
	}

	setIsMobile (value: boolean) {
		this.isMobile = value
	}

	setLaunched () {
		this.isLaunched = true
	}
}

export const appStore = new AppStore