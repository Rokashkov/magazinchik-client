import { IoHomeOutline, IoHome } from 'react-icons/io5'
import NavDrawer from 'shared/ui/navigation/NavDrawer'

export const MainNavDrawerLink = () => {
	
	return (
		<NavDrawer.Link
			iconOutline={ IoHomeOutline }
			iconFilled={ IoHome }
			href='/'
		>
			Главная
		</NavDrawer.Link>
	)
}