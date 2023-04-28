import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps } from 'react'

interface DefaultMainProps extends ComponentProps<'main'> {}

export const DefaultMain = ({ children, ...otherProps }: DefaultMainProps) => {
	
	return (
		<main
			className={ cn(styles.container) }
			{ ...otherProps }
		>
			{ children }
		</main>
	)
}