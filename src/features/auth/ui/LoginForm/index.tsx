import { authStore } from 'features/auth/store'
import { authService } from 'shared/api/sevices/authService'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useFetch } from 'shared/lib/hooks/useFetch'
import { store } from 'shared/model/store'
import Form, { FormProps } from 'shared/ui/other/Form'

export const LoginForm = observer(({ children, ...otherProps }: FormProps) => {
	const { email, password } = authStore
	const { fetch, data, error, isLoading } = useFetch(() => authService.login({ email, password }))

	useEffect(() => {
		data && (window.location.href = '/')
	}, [data])

	useEffect(() => {
		error && store.setSnackbarMessage(error.message)
	}, [error])

	useEffect(() => {
		authStore.setIsLoading(isLoading)
	}, [isLoading])
	
	return (
		<Form
			onSubmit={ () => fetch() }
			{ ...otherProps }
		>
			{ children }
		</Form>
	)
})