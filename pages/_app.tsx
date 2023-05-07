import { AppPropsWithLayout } from 'shared/types/AppPropsWithLayout'
import React, { useEffect } from 'react'
import { Montserrat_Alternates } from 'next/font/google'
import { observer } from 'mobx-react-lite'
import { store } from 'shared/model/store'
import { initDeviceType } from 'shared/lib/hooks/initDeviceType'
import { useBeforeMount } from 'shared/lib/hooks/useBeforeMount'
import { useWindowResize } from 'shared/lib/hooks/useWindowResize'
import { useFetch } from 'shared/lib/hooks/useFetch'
import { DefaultLayout } from 'layouts/DefaultLayout/ui'
import { Router } from 'next/router'
import { AnimatePresence } from 'framer-motion'
import cn from 'classnames'
import '../src/shared/styles/global.sass'
import 'normalize.css'
import { userStore } from 'entities/user'
import { authService } from 'shared/api/sevices/authService'
import { authStore } from 'features/auth'

if (typeof window === 'undefined') {
	React.useLayoutEffect = null
}

const montserrat = Montserrat_Alternates({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '600']
})

const App = observer(({ Component, pageProps, router }: AppPropsWithLayout) => {
	const Layout = Component.Layout ?? DefaultLayout
	const { fetch, data, error } = useFetch(() => authService.refresh())
	const start = () => store.setIsPageLoading(true)
	const end = () => store.setIsPageLoading(false)

	useBeforeMount(() => store.setPath(router.asPath))

	initDeviceType()

	useWindowResize()

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
		if (store.path !== router.asPath) {
			store.setPath(router.asPath)
		}
	})

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

	return (
		<AnimatePresence>
			<Layout className={ cn(montserrat.className) }>
				<Component { ...pageProps }/>
			</Layout>
		</AnimatePresence>
	)
})

export default App