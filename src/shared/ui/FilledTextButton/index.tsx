import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps } from 'react'

interface FilledTextButtonProps extends ComponentProps<'button'> {}

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