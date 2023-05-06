import { useEffect } from 'react'
import { store } from 'shared/model/store'

export const initDeviceType = () => {
	useEffect(() => {
		store.setDeviceType(window.innerWidth)
	}, [])
}