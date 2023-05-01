import { useEffect } from 'react'
import { store } from 'shared/model'

export const initDeviceType = () => {
	useEffect(() => {
		store.setWindowWidth(window.innerWidth)
	}, [])
}