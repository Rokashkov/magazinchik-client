import { useEffect } from 'react'
import { globalStore } from 'shared/model'

export const initDeviceType = () => {
	useEffect(() => {
		globalStore.setWindowWidth(window.innerWidth)
	}, [])
}