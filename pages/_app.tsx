import { appStore } from 'shared/model/appStore'
import { MainLayout } from 'layouts/MainLayout'
import { isMobile } from 'react-device-detect'
import { Montserrat } from 'next/font/google'
import cn from 'classnames'
import React, { useEffect } from 'react'
import '../src/shared/styles/global.sass'
import { AppPropsWithLayout } from 'shared/types/AppPropsWithLayout'

if (typeof window === 'undefined') {
	React.useLayoutEffect = null
}

const montserrat = Montserrat({
	subsets: ['latin', 'cyrillic'],
	weight: []
})

export default function App ({ Component, pageProps }: AppPropsWithLayout) {

	useEffect(() => {
		appStore.setIsMobile(isMobile)
		appStore.setLaunched()
	}, [])

	const Layout = Component.Layout ?? MainLayout

	return (
		<Layout className={ cn(montserrat.className) }>
			<Component { ...pageProps }/>
		</Layout>
	)
}