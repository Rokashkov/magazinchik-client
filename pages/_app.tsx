import { AppPropsWithLayout } from 'shared/types/AppPropsWithLayout'
import React, { useEffect } from 'react'
import { Montserrat } from 'next/font/google'
import { observer } from 'mobx-react-lite'
import { useBeforeMount } from 'shared/lib/hooks/useBeforeMount'
import { globalStore } from 'shared/model'
import { DefaultLayout } from 'layouts/DefaultLayout'
import cn from 'classnames'
import '../src/shared/styles/global.sass'
import 'normalize.css'

if (typeof window === 'undefined') {
	React.useLayoutEffect = null
}

const montserrat = Montserrat({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '600']
})

const App = observer(({ Component, pageProps, router }: AppPropsWithLayout) => {
	const Layout = Component.Layout ?? DefaultLayout

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