import { IoBagOutline, IoBag } from 'react-icons/io5'
import NavBar from 'shared/ui/navigation/NavBar'

export const CartNavBarLink = () => {
	
	return (
		<NavBar.Link
			iconOutline={ IoBagOutline }
			iconFilled={ IoBag }
			href='/cart'
		>
			Корзина
		</NavBar.Link>
	)
}