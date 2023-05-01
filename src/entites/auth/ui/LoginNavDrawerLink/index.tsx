import { IoLogIn, IoLogInOutline } from 'react-icons/io5'
import NavDrawer from 'shared/ui/navigation/NavDrawer'

export const LoginNavDrawerLink = () => {
	
	return (
		<NavDrawer.Link
			iconOutline={ IoLogInOutline }
			iconFilled={ IoLogIn }
			href='/login'
		>
			Вход
		</NavDrawer.Link>
	)
}