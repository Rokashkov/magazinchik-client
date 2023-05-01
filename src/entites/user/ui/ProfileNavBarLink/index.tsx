import NavBar from 'shared/ui/navigation/NavBar'
import { IoPerson, IoPersonOutline } from 'react-icons/io5'

export const ProfileNavBarLink = () => {
	
	return (
		<NavBar.Link
			iconOutline={ IoPersonOutline }
			iconFilled={ IoPerson }
			href='/profile'
		>
			Профиль
		</NavBar.Link>
	)
}