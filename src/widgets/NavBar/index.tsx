import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps } from 'react'
import { Item } from './Item'
import {
	IoHome, IoHomeOutline, IoCube, IoCubeOutline, IoHeart,
	IoHeartOutline, IoBag, IoBagOutline, IoPerson, IoPersonOutline
} from 'react-icons/io5'

interface NavBarProps extends ComponentProps<'nav'> {}

export const NavBar = ({ ...otherProps }: NavBarProps) => {
	
	return (
		<nav
			className={ cn(styles.container) }
			{ ...otherProps }
		>
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