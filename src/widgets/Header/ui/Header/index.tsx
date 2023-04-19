import { observer } from 'mobx-react-lite'
import { IoStorefrontOutline, IoCubeOutline, IoHeartOutline, IoBagOutline, IoPersonOutline } from 'react-icons/io5'
import { LinkWithIcon } from '../LinkWithIcon'
import styles from './.module.sass'
import cn from 'classnames'

export const Header = observer(() => {
	
	return (
		<header className={ cn(styles.header) }>
			<div className={ cn(styles.container) }>
				<LinkWithIcon
					href='/'
					icon={ IoStorefrontOutline }
				>
					Главная
				</LinkWithIcon>
				<div className={ cn(styles.group) }>
					<LinkWithIcon
						href='/order'
						icon={ IoCubeOutline }
					>
						Заказы
					</LinkWithIcon>
					<LinkWithIcon
						href='/favorites'
						icon={ IoHeartOutline }
					>
						Избранное
					</LinkWithIcon>
					<LinkWithIcon
						href='/cart'
						icon={ IoBagOutline }
					>
						Корзина
					</LinkWithIcon>
					<LinkWithIcon
						href='/profile'
						icon={ IoPersonOutline }
					>
						Профиль
					</LinkWithIcon>
				</div>
			</div>
		</header>
	)
})