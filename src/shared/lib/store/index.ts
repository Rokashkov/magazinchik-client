import { makeAutoObservable } from 'mobx'
import { config } from 'shared/config'

type DeviceType = 'mobile' | 'tablet' | 'desktop'

class Store {
	isAuth: boolean = undefined
	accessToken: string = undefined
	path: string = undefined
	snackbarMessage: string = undefined
	isSnackbarLoading = false
	isScrimVisible = false
	isNavDrawerVisible = false
	deviceType: DeviceType = undefined
	isPageLoading = false

	constructor () {
		makeAutoObservable(this)
	}

	setIsAuth (value: boolean) {
		this.isAuth = value
	}

	setAccessToken (accessToken: string) {
		this.accessToken = accessToken
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

	setDeviceType (windowWidth: number) {
		const { desktopMinWidth, tabletMinWidth } = config.breackpoints

		if (windowWidth >= desktopMinWidth && this.deviceType !== 'desktop') {
			this.deviceType = 'desktop'
		} else if (windowWidth >= tabletMinWidth && this.deviceType !== 'tablet') {
			this.deviceType = 'tablet'
		} else if (this.deviceType !== 'mobile') {
			this.deviceType = 'mobile'
		}
	}

	setSnackbarMessage (message: string) {
		this.snackbarMessage = message
	}

	setIsSnackbarLoading (value: boolean) {
		value && this.setSnackbarMessage('')
		this.isSnackbarLoading = value
		
	}

	setIsPageLoading (value: boolean) {
		this.isPageLoading = value
	}
}

export const store = new Store