import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps } from 'react'

export type ContainerProps = ComponentProps<'nav'>

export const Container = ({ children, className, ...otherProps }: ContainerProps) => {
	
	return (
		<nav
			className={ cn(styles.container, className) }
			{ ...otherProps }
		>
			{ children }
		</nav>
	)
}