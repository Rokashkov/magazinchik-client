import { useEffect } from 'react'
import { store } from 'shared/lib/store'

export const useWindowResize = () => {
	const resizeHandler = () => {
		store.setDeviceType(window.innerWidth)
	}

	useEffect(() => {
		addEventListener('resize', resizeHandler)

		return () => removeEventListener('resize', resizeHandler)
	}, [])
}