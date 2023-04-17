import { MainFooter } from 'widgets/main/Footer'
import { IMainLayoutProps } from './IMainLayoutProps'
import styles from './MainLayout.module.sass'
import cn from 'classnames'
import { MainHeader } from 'widgets/main/Header'
import { MainMain } from 'widgets/main/Main'

export const MainLayout = ({ children, className }: IMainLayoutProps) => {
	
	return (
		<div className={ cn(styles.container, className) }>
			<MainHeader/>
			<MainMain>{ children }</MainMain>
			<MainFooter/>
		</div>
	)
}