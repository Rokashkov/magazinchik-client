import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps } from 'react'

export type ContainerProps = ComponentProps<'main'>

export const Container = ({ children, className, ...otherProps }: ContainerProps) => {
	
	return (
		<main
			className={ cn(
				styles.container,
				className
			) }
			{ ...otherProps }
		>
			{ children }
		</main>
	)
}