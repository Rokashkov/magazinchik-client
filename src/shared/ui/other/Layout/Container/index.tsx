import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps } from 'react'
import { LaunchScreen } from 'shared/ui/other/LaunchScreen'

export type ContainerProps = ComponentProps<'div'>

export const Container = ({ children, className, ...otherProps }: ContainerProps) => {

	return (
		<div
			className={ cn(styles.container, className) }
			{ ...otherProps }
		>
			<LaunchScreen/>
			{ children }
		</div>
	)
}