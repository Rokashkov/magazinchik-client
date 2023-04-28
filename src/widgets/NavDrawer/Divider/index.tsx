import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps } from 'react'

interface DividerProps extends ComponentProps<'div'> {}

export const Divider = ({ ...otherProps }: DividerProps) => {
	
	return (
		<div
			className={ cn(styles.container) }
			{ ...otherProps }
		/>
	)
}