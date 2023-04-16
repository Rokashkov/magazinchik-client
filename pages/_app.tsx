import React from 'react'
import '../src/shared/styles/global.sass'
import { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'
import { MainLayout } from '../src/layouts/MainLayout'

if (typeof window === 'undefined') {
	React.useLayoutEffect = () => {}
}

const montserrat = Montserrat({
	subsets: ['latin', 'cyrillic'],
	weight: []
})

export default function MyApp ({ Component, pageProps }: AppProps<any>) {

	return (
		<MainLayout className={ montserrat.className }>
			<Component { ...pageProps }/>
		</MainLayout>
	)
}