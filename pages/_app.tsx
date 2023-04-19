import { Montserrat } from 'next/font/google'
import cn from 'classnames'
import React from 'react'
import '../src/shared/styles/global.sass'
import { AppPropsWithLayout } from 'shared/types/AppPropsWithLayout'
import { MainLayout } from 'layouts/MainLayout'

if (typeof window === 'undefined') {
	React.useLayoutEffect = null
}

const montserrat = Montserrat({
	subsets: ['latin', 'cyrillic'],
	weight: []
})

export default function ({ Component, pageProps }: AppPropsWithLayout) {
	const Layout = Component.Layout ?? MainLayout

	return (
		<Layout className={ cn(montserrat.className) }>
			<Component { ...pageProps }/>
		</Layout>
	)
}