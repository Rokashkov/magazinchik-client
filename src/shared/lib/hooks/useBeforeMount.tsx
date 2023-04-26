import { useRef } from 'react'

export const useBeforeMount = (callBack: () => void) => {
	const ref = useRef(false)

	if (!ref.current) {
		callBack()
		ref.current = true
	}
}