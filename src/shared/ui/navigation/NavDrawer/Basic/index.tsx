import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps } from 'react'

interface BasicProps extends ComponentProps<'div'> {}

export const Basic = ({ children, className, ...otherProps }: BasicProps) => {
	
	return (
		<div
			className={ cn(styles.container, className) }
			{ ...otherProps }
		>
			{ children }
		</div>
	)
}