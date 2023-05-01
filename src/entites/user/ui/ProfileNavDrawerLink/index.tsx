import NavDrawer from 'shared/ui/navigation/NavDrawer'
import { IoPersonOutline, IoPerson } from 'react-icons/io5'

export const ProfileNavDrawerLink = () => {
	
	return (
		<NavDrawer.Link
			iconOutline={ IoPersonOutline }
			iconFilled={ IoPerson }
			href='/profile'
		>
			Профиль
		</NavDrawer.Link>
	)
}