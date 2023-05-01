import { IoHomeOutline, IoHome } from 'react-icons/io5'
import NavBar from 'shared/ui/navigation/NavBar'


export const MainNavBarLink = () => {
	
	return (
		<NavBar.Link
			iconOutline={ IoHomeOutline }
			iconFilled={ IoHome }
			href='/'
		>
			Главная
		</NavBar.Link>
	)
}