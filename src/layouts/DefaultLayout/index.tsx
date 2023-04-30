import styles from './.module.sass'
import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import { LayoutProps } from 'shared/types/LayoutProps'
import { Snackbar } from 'shared/ui/Snackbar'
import { DefaultFooter } from 'widgets/DefaultFooter'
import { DefaultMain } from 'widgets/DefaultMain'
import { NavBar } from 'widgets/NavBar'
import { NavDrawer } from 'widgets/NavDrawer'
import { NavRail } from 'widgets/NavRail'
import { Scrim } from 'widgets/Scrim'
import { TopAppBar } from 'widgets/TopAppBar'

export interface DefaultLayoutProps extends LayoutProps {}

export const DefaultLayout = observer(({ children, className, ...otherProps }: DefaultLayoutProps) => {

	return (
		<div
			className={ cn(styles.container, className) }
			{ ...otherProps }
		>
			<NavDrawer/>
			<Scrim/>
			<Snackbar/>
			<NavRail/>
			<NavBar/>
			<TopAppBar/>
			<DefaultMain>{ children }</DefaultMain>
			<DefaultFooter/>
		</div>
	)
})