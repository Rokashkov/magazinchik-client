import { IoHomeOutline, IoHome, IoCubeOutline, IoCube, IoHeartOutline, IoHeart, IoBagOutline, IoBag, IoPersonOutline, IoPerson } from 'react-icons/io5'
import NavRail, { NavRailProps } from 'shared/ui/navigation/NavRail'

export const DefaultNavRail = ({ ...otherProps }: NavRailProps) => {
	
	return (
		<NavRail { ...otherProps }>
			<NavRail.Link
				iconOutline={ IoHomeOutline }
				iconFilled={ IoHome }
				href='/'
			>
				Главная
			</NavRail.Link>
			<NavRail.Link
				iconOutline={ IoCubeOutline }
				iconFilled={ IoCube }
				href='/orders'
			>
				Заказы
			</NavRail.Link>
			<NavRail.Link
				iconOutline={ IoHeartOutline }
				iconFilled={ IoHeart }
				href='/favorites'
			>
				Любимое
			</NavRail.Link>
			<NavRail.Link
				iconOutline={ IoBagOutline }
				iconFilled={ IoBag }
				href='/cart'
			>
				Корзина
			</NavRail.Link>
			<NavRail.Link
				iconOutline={ IoPersonOutline }
				iconFilled={ IoPerson }
				href='/profile'
			>
				Профиль
			</NavRail.Link>
		</NavRail>
	)
}