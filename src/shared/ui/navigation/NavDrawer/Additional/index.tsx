import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps } from 'react'

interface AdditionalProps extends ComponentProps<'div'> {}

export const Additional = ({ children, className, ...otherProps }: AdditionalProps) => {
	
	return (
		<div
			className={ cn(styles.container, className) }
			{ ...otherProps }
		>
			{ children }
		</div>
	)
}