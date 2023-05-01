import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps } from 'react'

export type FilledTextButtonProps = ComponentProps<'button'>

export const FilledTextButton = ({ className, children, ...otherProps }: FilledTextButtonProps) => {
	
	return (
		<button
			className={ cn(styles.container, className) }
			{ ...otherProps }
		>
			<div className={ cn(styles.state) }>
				{ children }
			</div>
		</button>
	)
}