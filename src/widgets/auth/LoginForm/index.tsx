import Link from 'next/link'
import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps, useState } from 'react'
import { FilledTextButton } from 'shared/ui/FilledTextButton'
import { PasswordField } from 'shared/ui/PasswordField'
import { TextField } from 'shared/ui/TextField'
import { useFetch } from 'shared/lib/hooks/useFetch'
import { authService } from 'shared/api/authService'
import { observer } from 'mobx-react-lite'
import { globalStore } from 'shared/model'

interface LoginFormProps extends ComponentProps<'div'> {}

export const LoginForm = observer(({ className, ...otherProps }: LoginFormProps) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const { fetch } = useFetch(
		() => authService.login({ email, password }),
		({ data }) => {
			console.log(data)
			globalStore.setSnackbarMessage('Вы успешно вошли')
			const { accessToken, user } = data
			localStorage.setItem('accessToken', accessToken)
			globalStore.setUser(user)
			window.location.href = '/'
		},
		(error) => {
			console.log(error)
			globalStore.setSnackbarMessage(error.response.data.errorMessage)
		}
	)
	
	return (
		<div
			className={ cn(styles.container, className) }
			{ ...otherProps }
		>
			<div className={ cn(styles.headline) }>Вход</div>
			<form
				className={ cn(styles.form) }
				onSubmit={ (e) => {
					e.preventDefault()
					fetch()
				} }
			>
				<TextField
					onChange={ (e) => setEmail(e.currentTarget.value) }
					placeholder='Email'
				/>
				<PasswordField
					onChange={ (e) => setPassword(e.currentTarget.value) }
					placeholder='Пароль'
				/>
				<FilledTextButton
					type='submit'
					className={ cn(styles.button) }
				>
					Войти
				</FilledTextButton>
			</form>
			<div className={ cn(styles.group) }>
				<div className={ cn(styles.small) }>или</div>
				<Link
					className={ cn(styles.link) }
					href='/register'
				>
					Зарегистироваться
				</Link>
			</div>
		</div>
	)
})