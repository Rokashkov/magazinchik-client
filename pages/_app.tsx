import { AppPropsWithLayout } from 'shared/types/AppPropsWithLayout'
import React, { useEffect } from 'react'
import { Montserrat_Alternates } from 'next/font/google'
import { observer } from 'mobx-react-lite'
import { store } from 'shared/model'
import { initDeviceType } from 'shared/lib/hooks/initDeviceType'
import { useBeforeMount } from 'shared/lib/hooks/useBeforeMount'
import { useWindowResize } from 'shared/lib/hooks/useWindowResize'
import cn from 'classnames'
import '../src/shared/styles/global.sass'
import 'normalize.css'
import { useFetch } from 'shared/lib/hooks/useFetch'
import { authService } from 'features/auth/api'
import { DefaultLayout } from 'layouts/default/DefaultLayout'
import { authStore } from 'entites/auth/model'
import { userStore } from 'entites/user/model'
import { Router } from 'next/router'
import { AnimatePresence } from 'framer-motion'

if (typeof window === 'undefined') {
	React.useLayoutEffect = null
}

const montserrat = Montserrat_Alternates({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '600']
})

const App = observer(({ Component, pageProps, router }: AppPropsWithLayout) => {
	const Layout = Component.Layout ?? DefaultLayout

	const { fetch, data, error } = useFetch({ requestHandler: () => authService.refresh() })

	const start = () => store.setIsPageLoading(true)
	const end = () => store.setIsPageLoading(false)

	useEffect(() => {
		fetch()

		Router.events.on('routeChangeStart', start)
		Router.events.on('routeChangeComplete', end)
		Router.events.on('routeChangeError', end)

		return () => {
			Router.events.off('routeChangeStart', start)
			Router.events.off('routeChangeComplete', end)
			Router.events.off('routeChangeError', end)
		}
	}, [])

	useEffect(() => {
		if (error) {
			store.setSnackbarMessage(`Не удалось автоматически авторизоваться: ${ error.message }`)
		}
	}, [error])

	useEffect(() => {
		if (data) {
			const { accessToken, user } = data
			authStore.setIsAuth(true)
			authStore.setAccessToken(accessToken)
			userStore.setUser(user)
		}
	}, [data])

	initDeviceType()

	useWindowResize()

	useBeforeMount(() => store.setPath(router.asPath))

	useEffect(() => {
		if (store.path !== router.asPath) {
			
			store.setPath(router.asPath)
		}
	})

	return (
		<AnimatePresence
			mode="wait"
			initial={ false }
		>
			<Layout className={ cn(montserrat.className) }>
				<Component { ...pageProps }/>
			</Layout>
		</AnimatePresence>
	)
})

export default App