import { MainFooter } from 'widgets/main/Footer'
import { IMainLayoutProps } from './IMainLayoutProps'
import styles from './MainLayout.module.sass'
import cn from 'classnames'
import { MainHeader } from 'widgets/main/Header'
import { MainMain } from 'widgets/main/Main'
import { BrandedLaunchScreen } from 'widgets/BrandedLaunchScreen'
import { appStore } from 'shared/model/appStore'
import { observer } from 'mobx-react-lite'

export const MainLayout = observer(({ children, className }: IMainLayoutProps) => {
	
	return (
		<div className={ cn(
			styles.container,
			appStore.isLaunched && styles.active,
			className
		) }
		>
			<BrandedLaunchScreen/>
			<MainHeader/>
			<MainMain>{ children }</MainMain>
			<MainFooter/>
		</div>
	)
})