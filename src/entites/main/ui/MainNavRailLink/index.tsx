import NavRail from 'shared/ui/navigation/NavRail'
import { IoHomeOutline, IoHome } from 'react-icons/io5'

export const MainNavRailLink = () => {
	
	return (
		<NavRail.Link
			iconOutline={ IoHomeOutline }
			iconFilled={ IoHome }
			href='/'
		>
			Главная
		</NavRail.Link>
	)
}