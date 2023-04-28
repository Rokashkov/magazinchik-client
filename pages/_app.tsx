import { AppPropsWithLayout } from 'shared/types/AppPropsWithLayout'
import React, { useEffect } from 'react'
import { Montserrat_Alternates } from 'next/font/google'
import { observer } from 'mobx-react-lite'
import { globalStore } from 'shared/model'
import { DefaultLayout } from 'layouts/DefaultLayout'
import { initDeviceType } from 'shared/lib/hooks/initDeviceType'
import { useBeforeMount } from 'shared/lib/hooks/useBeforeMount'
import { useWindowResize } from 'shared/lib/hooks/useWindowResize'
import cn from 'classnames'
import '../src/shared/styles/global.sass'
import 'normalize.css'

if (typeof window === 'undefined') {
	React.useLayoutEffect = null
}

const montserrat = Montserrat_Alternates({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '600']
})

const App = observer(({ Component, pageProps, router }: AppPropsWithLayout) => {
	const Layout = Component.Layout ?? DefaultLayout

	initDeviceType()

	useWindowResize()

	useBeforeMount(() => globalStore.setPath(router.asPath))

	useEffect(() => {
		if (globalStore.path !== router.asPath) {
			
			globalStore.setPath(router.asPath)
		}
	})

	return (
		<Layout className={ cn(montserrat.className) }>
			<Component { ...pageProps }/>
		</Layout>
	)
})

export default App