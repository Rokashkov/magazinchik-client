import { IMainLayoutProps } from './IMainLayoutProps'
import styles from './MainLayout.module.sass'
import cn from 'classnames'

export const MainLayout = ({ children, className }: IMainLayoutProps) => {
	
	return (
		<div className={ cn(styles.container, className) }>
			{ children }
		</div>
	)
}