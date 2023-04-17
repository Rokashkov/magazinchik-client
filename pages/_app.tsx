import App, { AppContext, AppInitialProps } from 'next/app'
import { globalStore } from 'shared/store/globalStore'
import { MainLayout } from 'layouts/MainLayout'
import { AppProps } from 'next/app'
import { NextPageWithLayout } from 'shared/types/NextPageWithLayout'
import { getSelectorsByUserAgent } from 'react-device-detect'
import { Montserrat } from 'next/font/google'
import cn from 'classnames'
import React from 'react'
import '../src/shared/styles/global.sass'

if (typeof window === 'undefined') {
	React.useLayoutEffect = null
}

const montserrat = Montserrat({
	subsets: ['latin', 'cyrillic'],
	weight: []
})

interface ICustomAppProps {
	isMobile: boolean
}

type AppPropsWithLayout = AppProps<ICustomAppProps | any> & {
	Component: NextPageWithLayout
}

const CustomApp = ({ Component, pageProps }: AppPropsWithLayout) => {
	const { isMobile, ...otherPageProps } = pageProps

	if (typeof isMobile !== 'undefined') {
		globalStore.setIsMobile(isMobile)
	}

	const Layout = Component.Layout ?? MainLayout

	return (
		<Layout className={ cn(montserrat.className) }>
			<Component { ...otherPageProps }/>
		</Layout>
	)
}

CustomApp.getInitialProps = async (appContext: AppContext): Promise<AppInitialProps<ICustomAppProps | any>> => {
	const { pageProps } = await App.getInitialProps(appContext)

	if (typeof window === 'undefined') {
		const { ctx } = appContext
		const userAgent = ctx.req.headers['user-agent']
		const { isMobile } = getSelectorsByUserAgent(userAgent) as { isMobile: boolean }

		return {
			pageProps: {
				...pageProps,
				isMobile
			}
		}
	}

	return { pageProps }
}

export default CustomApp