import { authStore } from 'features/auth/store'
import { useEffect } from 'react'
import { IoLogOutOutline } from 'react-icons/io5'
import { authService } from 'shared/api/sevices/authService'
import { useFetch } from 'shared/lib/hooks/useFetch'
import NavDrawer from 'shared/ui/navigation/NavDrawer'

export const LogoutNavDrawerAction = () => {
	const { fetch, isLoading } = useFetch(
		() => authService.logout(),
		() => {},
		() => window.location.href = '/'
	)

	useEffect(() => {
		authStore.setIsLoading(isLoading)
	}, [isLoading])
	
	return (
		<NavDrawer.Action
			icon={ IoLogOutOutline }
			onClick={ () => fetch() }
		>
			Выйти
		</NavDrawer.Action>
	)
}