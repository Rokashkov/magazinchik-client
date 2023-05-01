import { IoCubeOutline, IoCube } from 'react-icons/io5'
import NavDrawer from 'shared/ui/navigation/NavDrawer'

export const OrdersNavDrawerLink = () => {
	
	return (
		<NavDrawer.Link
			iconOutline={ IoCubeOutline }
			iconFilled={ IoCube }
			href='/orders'
		>
			Заказы
		</NavDrawer.Link>
	)
}