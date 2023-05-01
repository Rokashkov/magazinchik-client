import { makeAutoObservable } from 'mobx'

type DeviceType = 'mobile' | 'tablet' | 'desktop'

class Store {
	path: string = undefined
	snackbarMessage: string = undefined
	isScrimVisible = false
	isNavDrawerVisible = false
	windowWidth: number = undefined
	deviceType: DeviceType = undefined

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
}

export const store = new Store