import { authService } from 'features/auth/api'
import { IoLogOutOutline } from 'react-icons/io5'
import { FinallyHandler, RequestHandler, useFetch } from 'shared/lib/hooks/useFetch'
import NavDrawer from 'shared/ui/navigation/NavDrawer'

export const LogoutNavDrawerAction = () => {
	const requestHandler: RequestHandler = () => authService.logout()
	const finallyHandler: FinallyHandler = () => {
		localStorage.removeItem('accessToken')
		window.location.href = '/login'
	}

	const { fetch } = useFetch({
		requestHandler,
		finallyHandler
	})
	
	return (
		<NavDrawer.Action
			icon={ IoLogOutOutline }
			onClick={ () => fetch() }
		>
			Выйти
		</NavDrawer.Action>
	)
}