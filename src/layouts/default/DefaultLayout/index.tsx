import Layout, { LayoutProps } from 'shared/ui/containers/Layout'
import { DefaultFooter } from 'widgets/default/DefaultFooter'
import { DefaultMain } from 'widgets/default/DefaultMain'
import { DefaultNavBar } from 'widgets/default/DefaultNavBar'
import { DefaultNavDrawer } from 'widgets/default/DefaultNavDrawer'
import { DefaultNavRail } from 'widgets/default/DefaultNavRail'
import { DefaultTopAppBar } from 'widgets/default/DefaultTopAppBar'

export const DefaultLayout = ({ children, ...otherProps }: LayoutProps) => {
	
	return (
		<Layout { ...otherProps }>
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