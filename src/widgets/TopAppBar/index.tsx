import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps } from 'react'
import { IoMenu, IoMenuOutline } from 'react-icons/io5'
import { globalStore } from 'shared/model'
import { IconButton } from 'shared/ui/IconButton'

interface TopAppBarProps extends ComponentProps<'nav'> {}

export const TopAppBar = ({ ...otherProps }: TopAppBarProps) => {
	
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
		</nav>
	)
}