import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps } from 'react'
import { IoMenu, IoMenuOutline } from 'react-icons/io5'
import { IconButton } from 'shared/ui/buttons/IconButton'
import { store } from 'shared/model/store'

export type ContainerProps = ComponentProps<'nav'>

export const Container = ({ children, className, ...otherProps }: ContainerProps) => {
	
	return (
		<nav
			className={ cn(styles.container, className) }
			{ ...otherProps }
		>
			<IconButton
				onClick={ () => store.setIsNavDrawerVisible(true) }
				iconOutline={ IoMenuOutline }
				iconFilled={ IoMenu }
			/>
			{ children }
		</nav>
	)
}