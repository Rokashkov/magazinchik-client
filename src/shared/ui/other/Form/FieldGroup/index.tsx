import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps } from 'react'

interface FieldGroupProps extends ComponentProps<'div'> {}

export const FieldGroup = ({ children, className, ...otherProps }: FieldGroupProps) => {
	
	return (
		<div
			className={ cn(styles.container, className) }
			{ ...otherProps }
		>
			{ children }
		</div>
	)
}