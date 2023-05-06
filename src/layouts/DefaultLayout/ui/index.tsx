import Layout, { LayoutProps } from 'shared/ui/other/Layout'
import { Scrim } from 'shared/ui/other/Scrim'
import { Snackbar } from 'shared/ui/other/Snackbar'
import { DefaultFooter } from 'widgets/other/DefaultFooter'
import { DefaultMain } from 'widgets/other/DefaultMain'
import { DefaultNavBar } from 'widgets/other/DefaultNavBar'
import { DefaultNavDrawer } from 'widgets/other/DefaultNavDrawer'
import { DefaultNavRail } from 'widgets/other/DefaultNavRail'
import { DefaultTopAppBar } from 'widgets/other/DefaultTopAppBar/ui'

export const DefaultLayout = ({ children, ...otherProps }: LayoutProps) => {
	
	return (
		<Layout { ...otherProps }>
			<Snackbar/>
			<Scrim/>
			<DefaultNavDrawer/>
			<DefaultNavRail/>
			<DefaultTopAppBar/>
			<DefaultNavBar/>
			<DefaultMain>
				{ children }
			</DefaultMain>
			<DefaultFooter/>
		</Layout>
	)
}