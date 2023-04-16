import React from 'react'
import '../src/shared/styles/global.sass'
import { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'
import { MainLayout } from '../src/layouts/MainLayout'
import { globalStore } from 'shared/store'
import { observer } from 'mobx-react-lite'
import { isMobile } from 'react-device-detect'

if (typeof window === 'undefined') {
	React.useLayoutEffect = () => {}
}

const montserrat = Montserrat({
	subsets: ['latin', 'cyrillic'],
	weight: []
})

const MyApp = observer(({ Component, pageProps }: AppProps<any>) => {
	globalStore.setIsMobile(isMobile)

	return (
		<MainLayout className={ montserrat.className }>
			<Component { ...pageProps }/>
		</MainLayout>
	)
})

export default MyApp