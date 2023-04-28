import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps } from 'react'

interface HeadlineProps extends ComponentProps<'div'> {}

export const Headline = ({ children, ...otherProps }: HeadlineProps) => {
	
	return (
		<div
			className={ cn(styles.container) }
			{ ...otherProps }
		>
			{ children }
		</div>
	)
}