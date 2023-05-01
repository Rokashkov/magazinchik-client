import { useEffect } from 'react'
import { store } from 'shared/model'

export const useWindowResize = () => {
	const resizeHandler = () => {
		store.setWindowWidth(window.innerWidth)
	}

	useEffect(() => {
		addEventListener('resize', resizeHandler)

		return () => removeEventListener('resize', resizeHandler)
	}, [])
}