import { Main } from 'widgets/Main'
import styles from './.module.sass'
import cn from 'classnames'
import { Header } from 'widgets/Header'
import { Footer } from 'widgets/Footer'
import { observer } from 'mobx-react-lite'
import { LayoutProps } from 'shared/types'
import { LaunchScreen } from 'widgets/LaunchScreen'
import { globalStore } from 'shared/model'

export interface MainLayoutProps extends LayoutProps {}

export const MainLayout = observer(({ children, className, ...otherProps }: MainLayoutProps) => {
	
	return (
		<div
			className={ cn(
				styles.container,
				globalStore.isLaunched && styles.active,
				className
			) }
			{ ...otherProps }
		>
			<LaunchScreen/>
			<Header/>
			<Main>{ children }</Main>
			<Footer/>
		</div>
	)
})