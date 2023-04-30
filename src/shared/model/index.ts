import { makeAutoObservable } from 'mobx'

type DeviceType = 'mobile' | 'tablet' | 'desktop'

interface User {
	id: number
	name: string
	email: string
}

class GlobalStore {
	path: string = undefined
	isScrimVisible = false
	snackbarMessage = ''
	isNavDrawerVisible = false
	windowWidth: number = undefined
	deviceType: DeviceType = undefined
	user: User = {} as User

	constructor () {
		makeAutoObservable(this)
	}

	setPath (path: string) {
		this.path = path
	}

	setIsScrimVisible (value:boolean, recall = false) {
		this.isScrimVisible = value

		if (!recall) {
			this.setIsNavDrawerVisible(value, true)
		}
	}

	setIsNavDrawerVisible (value: boolean, recall = false) {
		this.isNavDrawerVisible = value

		if (!recall) {
			this.setIsScrimVisible(value, true)
		}
	}

	setWindowWidth (windowWidth: number) {
		this.windowWidth = windowWidth

		if (windowWidth >= 1801) {
			this.deviceType !== 'desktop' && this.setDeviceType('desktop')
			this.isNavDrawerVisible && this.setIsNavDrawerVisible(false)
		} else if (windowWidth >= 601) {
			this.deviceType !== 'tablet' && this.setDeviceType('tablet')
		} else {
			this.deviceType !== 'mobile' && this.setDeviceType('mobile')
		}
	}
	
	setDeviceType (deviceType: DeviceType) {
		this.deviceType = deviceType
	}

	setSnackbarMessage (message: string) {
		this.snackbarMessage = message
	}

	setUser (user: User) {
		this.user = user
	}
}

export const globalStore = new GlobalStore