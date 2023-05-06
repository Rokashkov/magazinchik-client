import { IoBag, IoBagOutline, IoCube, IoCubeOutline, IoHeart, IoHeartOutline, IoHome, IoHomeOutline, IoPerson, IoPersonOutline } from 'react-icons/io5'
import NavBar, { NavBarProps } from 'shared/ui/navigation/NavBar'

export const DefaultNavBar = ({ ...otherProps }: NavBarProps) => {
	
	return (
		<NavBar { ...otherProps }>
			<NavBar.Link
				iconOutline={ IoHomeOutline }
				iconFilled={ IoHome }
				href='/'
			>
				Главная
			</NavBar.Link>
			<NavBar.Link
				iconOutline={ IoCubeOutline }
				iconFilled={ IoCube }
				href='/orders'
			>
				Заказы
			</NavBar.Link>
			<NavBar.Link
				iconOutline={ IoHeartOutline }
				iconFilled={ IoHeart }
				href='/favorites'
			>
				Любимое
			</NavBar.Link>
			<NavBar.Link
				iconOutline={ IoBagOutline }
				iconFilled={ IoBag }
				href='/cart'
			>
				Корзина
			</NavBar.Link>
			<NavBar.Link
				iconOutline={ IoPersonOutline }
				iconFilled={ IoPerson }
				href='/profile'
			>
				Профиль
			</NavBar.Link>
		</NavBar>
	)
}