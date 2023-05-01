import { IoPersonOutline, IoPerson } from 'react-icons/io5'
import NavRail from 'shared/ui/navigation/NavRail'

export const ProfileNavRailLink = () => {
	
	return (
		<NavRail.Link
			iconOutline={ IoPersonOutline }
			iconFilled={ IoPerson }
			href='/profile'
		>
			Профиль
		</NavRail.Link>
	)
}