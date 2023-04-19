import styles from './.module.sass'
import cn from 'classnames'
import { LayoutProps } from 'shared/types/LayoutProps'

export const Layout = ({ children, className, ...otherProps }: LayoutProps) => {
	
	return (
		<div
			className={ cn(styles.container, className) }
			{ ...otherProps }
		>
			{ children }
		</div>
	)
}