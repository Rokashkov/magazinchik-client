import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps } from 'react'
import { Scrim } from 'shared/ui/modal/Scrim'
import { Snackbar } from 'shared/ui/modal/Snackbar'

export type ContainerProps = ComponentProps<'div'>

export const Container = ({ children, className, ...otherProps }: ContainerProps) => {

	return (
		<div
			className={ cn(styles.container, className) }
			{ ...otherProps }
		>
			<Scrim/>
			<Snackbar/>
			{ children }
		</div>
	)
}