import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps } from 'react'

export type ContainerProps = ComponentProps<'div'>

export const Container = ({ children, className, ...otherProps }: ContainerProps) => {

	return (
		<div
			className={ cn(styles.container, className) }
			{ ...otherProps }
		>
			{ children }
		</div>
	)
}