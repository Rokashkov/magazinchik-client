import { IoBagOutline, IoBag } from 'react-icons/io5'
import NavDrawer from 'shared/ui/navigation/NavDrawer'

export const CartNavDrawerLink = () => {
	
	return (
		<NavDrawer.Link
			iconOutline={ IoBagOutline }
			iconFilled={ IoBag }
			href='/cart'
		>
			Корзина
		</NavDrawer.Link>
	)
}