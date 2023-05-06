import { authStore } from 'features/auth'
import { LogoutNavDrawerAction } from 'features/auth/ui/LogoutNavDrawerAction'
import { observer } from 'mobx-react-lite'
import { IoLogInOutline, IoLogIn, IoPersonAddOutline, IoPersonAdd } from 'react-icons/io5'
import NavDrawer, { NavDrawerProps } from 'shared/ui/navigation/NavDrawer'

export const DefaultNavDrawer = observer(({ ...otherProps }: NavDrawerProps) => {
	const { isAuth } = authStore
	
	return (
		<NavDrawer { ...otherProps }>
			<NavDrawer.Headline>Магазинчик</NavDrawer.Headline>
			{ !isAuth && (
				<>
					<NavDrawer.Link
						iconOutline={ IoLogInOutline }
						iconFilled={ IoLogIn }
						href='/login'
					>
						Вход
					</NavDrawer.Link>
					<NavDrawer.Link
						iconOutline={ IoPersonAddOutline }
						iconFilled={ IoPersonAdd }
						href='/register'
					>
						Регистрация
					</NavDrawer.Link>
				</>
			) }
			{ isAuth && <LogoutNavDrawerAction/> }
		</NavDrawer>
	)
})