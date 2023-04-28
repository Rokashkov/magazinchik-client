import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps } from 'react'
import { Item } from './Item'
import {
	IoHome, IoHomeOutline, IoCube, IoCubeOutline, IoHeart,
	IoHeartOutline, IoBag, IoBagOutline, IoPerson, IoPersonOutline,
	IoMenu, IoMenuOutline 
} from 'react-icons/io5'
import { IconButton } from 'shared/ui/IconButton'
import { globalStore } from 'shared/model'

interface NavRailProps extends ComponentProps<'nav'> {}

export const NavRail = ({ ...otherProps }: NavRailProps) => {
	
	return (
		<nav
			className={ cn(styles.container) }
			{ ...otherProps }
		>
			<IconButton
				onClick={ () => globalStore.setIsNavDrawerVisible(true) }
				iconOutline={ IoMenuOutline }
				iconFilled={ IoMenu }
			/>
			<Item
				iconOutline={ IoHomeOutline }
				iconFilled={ IoHome }
				href='/'
			>
				Главная
			</Item>
			<Item
				iconOutline={ IoCubeOutline }
				iconFilled={ IoCube }
				href='/orders'
			>
				Заказы
			</Item>
			<Item
				iconOutline={ IoHeartOutline }
				iconFilled={ IoHeart }
				href='/favorites'
			>
				Любимое
			</Item>
			<Item
				iconOutline={ IoBagOutline }
				iconFilled={ IoBag }
				href='/cart'
			>
				Корзина
			</Item>
			<Item
				iconOutline={ IoPersonOutline }
				iconFilled={ IoPerson }
				href='/profile'
			>
				Профиль
			</Item>
		</nav>
	)
}