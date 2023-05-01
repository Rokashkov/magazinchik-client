import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps } from 'react'

interface HeadlineProps extends ComponentProps<'div'> {}

export const Headline = ({ children, className, ...otherProps }: HeadlineProps) => {
	
	return (
		<div
			className={ cn(styles.container, className) }
			{ ...otherProps }
		>
			{ children }
		</div>
	)
}