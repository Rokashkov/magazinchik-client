import { useEffect } from 'react'
import { store } from 'shared/lib/store'

export const initDeviceType = () => {
	useEffect(() => {
		store.setDeviceType(window.innerWidth)
	}, [])
}