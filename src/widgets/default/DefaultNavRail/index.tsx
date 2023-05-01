import { CartNavRailLink } from 'entites/cart/ui/CartNavRailLink'
import { FavoritesNavRailLink } from 'entites/favorite/ui/FavoritesNavRailLink'
import { MainNavRailLink } from 'entites/main/ui/MainNavRailLink'
import { OrdersNavRailLink } from 'entites/order/ui/OrdersNavRailLink'
import { ProfileNavRailLink } from 'entites/user/ui/ProfileNavRailLink'
import NavRail, { NavRailProps } from 'shared/ui/navigation/NavRail'

export const DefaultNavRail = ({ ...otherProps }: NavRailProps) => {
	
	return (
		<NavRail { ...otherProps }>
			<MainNavRailLink/>
			<OrdersNavRailLink/>
			<FavoritesNavRailLink/>
			<CartNavRailLink/>
			<ProfileNavRailLink/>
		</NavRail>
	)
}