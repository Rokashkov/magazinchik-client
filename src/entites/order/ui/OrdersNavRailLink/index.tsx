import { IoCubeOutline, IoCube } from 'react-icons/io5'
import NavRail from 'shared/ui/navigation/NavRail'

export const OrdersNavRailLink = () => {
	
	return (
		<NavRail.Link
			iconOutline={ IoCubeOutline }
			iconFilled={ IoCube }
			href='/orders'
		>
			Заказы
		</NavRail.Link>
	)
}