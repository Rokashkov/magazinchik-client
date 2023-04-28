import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps, TouchEventHandler, useRef, useState } from 'react'
import {
	IoHome, IoHomeOutline, IoCube, IoCubeOutline, IoHeart,
	IoHeartOutline, IoBag, IoBagOutline, IoPerson, IoPersonOutline, IoLogIn, IoLogInOutline, IoPersonAdd, IoPersonAddOutline
} from 'react-icons/io5'
import { Item } from './Item'
import { Headline } from './Headline'
import { Divider } from './Divider'
import { observer } from 'mobx-react-lite'
import { globalStore } from 'shared/model'
import { CSSTransition } from 'react-transition-group'

interface NavDrawerProps extends ComponentProps<'nav'> {}

export const NavDrawer = observer(({ ...otherProps }: NavDrawerProps) => {
	const ref = useRef(null)
	const [touchStart, setTouchStart] = useState(0)
	const [touchEnd, setTouchEnd] = useState(0)

	const handleTouchStart: TouchEventHandler = (e) => {
		setTouchStart(e.targetTouches[0].clientX)
	}

	const handleTouchMove: TouchEventHandler = (e) => {
		setTouchEnd(e.targetTouches[0].clientX)
	}

	const handleTouchEnd: TouchEventHandler = () => {
		if (touchStart - touchEnd > 150) {
			globalStore.setIsNavDrawerVisible(false)
		}
	}
	
	return (
		<CSSTransition
			nodeRef={ ref }
			in={ globalStore.isNavDrawerVisible }
			timeout={ {
				enter: 300,
				exit: 200
			} }
			classNames={ {
				enter: styles.enter,
				enterDone: styles.enterDone,
				exit: styles.exit
			} }
		>
			<nav
				ref={ ref }
				className={ cn(styles.container) }
				{ ...otherProps }
				onTouchStart={ handleTouchStart }
				onTouchMove={ handleTouchMove }
				onTouchEnd={ handleTouchEnd }
			>
				<Headline>Навигация</Headline>
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
				<Divider/>
				<Headline>Действия</Headline>
				<Item
					iconOutline={ IoLogInOutline }
					iconFilled={ IoLogIn }
					href='/login'
				>
					Вход
				</Item>
				<Item
					iconOutline={ IoPersonAddOutline }
					iconFilled={ IoPersonAdd }
					href='/register'
				>
					Регистрация
				</Item>
			</nav>
		</CSSTransition>
	)
})