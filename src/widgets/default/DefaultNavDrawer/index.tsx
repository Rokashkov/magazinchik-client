import { authStore } from 'entites/auth/model'
import { LoginNavDrawerLink } from 'entites/auth/ui/LoginNavDrawerLink'
import { RegisterNavDrawerLink } from 'entites/auth/ui/RegisterNavDrawerLink'
import { CartNavDrawerLink } from 'entites/cart/ui/CartNavDrawerLink'
import { FavoritesNavDrawerLink } from 'entites/favorite/ui/FavoritesNavDrawerLink'
import { MainNavDrawerLink } from 'entites/main/ui/MainNavDrawerLink'
import { OrdersNavDrawerLink } from 'entites/order/ui/OrdersNavDrawerLink'
import { ProfileNavDrawerLink } from 'entites/user/ui/ProfileNavDrawerLink'
import { LogoutNavDrawerAction } from 'features/auth/ui/LogoutNavDrawerAction'
import { observer } from 'mobx-react-lite'
import NavDrawer, { NavDrawerProps } from 'shared/ui/navigation/NavDrawer'

export const DefaultNavDrawer = observer(({ ...otherProps }: NavDrawerProps) => {
	const { isAuth } = authStore
	
	return (
		<NavDrawer { ...otherProps }>
			<NavDrawer.Headline>Магазинчик</NavDrawer.Headline>
			<NavDrawer.Basic>
				<MainNavDrawerLink/>
				<OrdersNavDrawerLink/>
				<FavoritesNavDrawerLink/>
				<CartNavDrawerLink/>
				<ProfileNavDrawerLink/>
			</NavDrawer.Basic>
			<NavDrawer.Additional>
				{ !isAuth && (
					<>
						<LoginNavDrawerLink/>
						<RegisterNavDrawerLink/>
					</>
				) }
				{ isAuth && <LogoutNavDrawerAction/> }
			</NavDrawer.Additional>
		</NavDrawer>
	)
})