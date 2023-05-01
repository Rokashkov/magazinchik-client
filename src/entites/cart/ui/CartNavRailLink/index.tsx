import { IoBagOutline, IoBag } from 'react-icons/io5'
import NavRail from 'shared/ui/navigation/NavRail'

export const CartNavRailLink = () => {
	
	return (
		<NavRail.Link
			iconOutline={ IoBagOutline }
			iconFilled={ IoBag }
			href='/cart'
		>
			Корзина
		</NavRail.Link>
	)
}