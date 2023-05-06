import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps } from 'react'

export type ContainerProps = ComponentProps<'footer'>

export const Container = ({ children, className, ...otherProps }: ContainerProps) => {
	
	return (
		<footer
			className={ cn(styles.container, className) }
			{ ...otherProps }
		>
			{ children }
		</footer>
	)
}