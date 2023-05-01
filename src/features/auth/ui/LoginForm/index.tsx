import { authStore } from 'entites/auth/model'
import { authService } from 'features/auth/api'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useFetch } from 'shared/lib/hooks/useFetch'
import { store } from 'shared/model'
import Form, { FormProps } from 'shared/ui/containers/Form'

export const LoginForm = observer(({ children, ...otherProps }: FormProps) => {
	const { email, password } = authStore

	const { fetch, data, error } = useFetch({ requestHandler: () => authService.login({ email, password }) })

	useEffect(() => {
		if (error) {
			store.setSnackbarMessage(error.message)
		}
	}, [error])

	useEffect(() => {
		if (data) {
			window.location.href = '/'
		}
	}, [data])
	
	return (
		<Form
			onSubmit={ () => fetch() }
			{ ...otherProps }
		>
			{ children }
		</Form>
	)
})