import { CartNavBarLink } from 'entites/cart/ui/CartNavBarLink'
import { FavoritesNavBarLink } from 'entites/favorite/ui/FavoritesNavBarLink'
import { MainNavBarLink } from 'entites/main/ui/MainNavBarLink'
import { OrdersNavBarLink } from 'entites/order/ui/OrdersNavBarLink'
import { ProfileNavBarLink } from 'entites/user/ui/ProfileNavBarLink'
import NavBar, { NavBarProps } from 'shared/ui/navigation/NavBar'

export const DefaultNavBar = ({ ...otherProps }: NavBarProps) => {
	
	return (
		<NavBar { ...otherProps }>
			<MainNavBarLink/>
			<OrdersNavBarLink/>
			<FavoritesNavBarLink/>
			<CartNavBarLink/>
			<ProfileNavBarLink/>
		</NavBar>
	)
}