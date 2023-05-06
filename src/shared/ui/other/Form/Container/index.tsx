import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps } from 'react'

export type ContainerProps = ComponentProps<'form'>

export const Container = ({ onSubmit, children, className, ...otherProps }: ContainerProps) => {
	
	return (
		<form
			onSubmit={ (e) => {
				e.preventDefault()
				onSubmit && onSubmit(e)
			} }
			className={ cn(styles.container, className) }
			{ ...otherProps }
		>
			{ children }
		</form>
	)
}