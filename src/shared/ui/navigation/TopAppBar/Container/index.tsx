import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps } from 'react'
import { IoMenu, IoMenuOutline } from 'react-icons/io5'
import { store } from 'shared/lib/store'
import { IconButton } from 'shared/ui/buttons/IconButton'

export type ContainerProps = ComponentProps<'nav'>

export const Container = ({ ...otherProps }: ContainerProps) => {
	
	return (
		<nav
			className={ cn(styles.container) }
			{ ...otherProps }
		>
			<IconButton
				onClick={ () => store.setIsNavDrawerVisible(true) }
				iconOutline={ IoMenuOutline }
				iconFilled={ IoMenu }
			/>
		</nav>
	)
}