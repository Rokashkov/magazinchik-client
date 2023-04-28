import { useEffect } from 'react'
import { globalStore } from 'shared/model'

export const useWindowResize = () => {
	const resizeHandler = () => {
		globalStore.setWindowWidth(window.innerWidth)
	}

	useEffect(() => {
		addEventListener('resize', resizeHandler)

		return () => removeEventListener('resize', resizeHandler)
	}, [])
}