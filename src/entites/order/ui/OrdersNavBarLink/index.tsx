import { IoCubeOutline, IoCube } from 'react-icons/io5'
import NavBar from 'shared/ui/navigation/NavBar'

export const OrdersNavBarLink = () => {
	
	return (
		<NavBar.Link
			iconOutline={ IoCubeOutline }
			iconFilled={ IoCube }
			href='/orders'
		>
			Заказы
		</NavBar.Link>
	)
}