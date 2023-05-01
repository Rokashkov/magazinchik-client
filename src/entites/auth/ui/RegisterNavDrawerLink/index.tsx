import { IoPersonAdd, IoPersonAddOutline } from 'react-icons/io5'
import NavDrawer from 'shared/ui/navigation/NavDrawer'

export const RegisterNavDrawerLink = () => {
	
	return (
		<NavDrawer.Link
			iconOutline={ IoPersonAddOutline }
			iconFilled={ IoPersonAdd }
			href='/register'
		>
			Регистрация
		</NavDrawer.Link>
	)
}