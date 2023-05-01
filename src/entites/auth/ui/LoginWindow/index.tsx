import styles from './.module.sass'
import cn from 'classnames'
import Link from 'next/link'
import { ComponentProps, ReactNode } from 'react'
import Form from 'shared/ui/containers/Form'

interface LoginWindowProps extends Omit<ComponentProps<'div'>, 'children'> {
	form: (props: { children?: ReactNode }) => JSX.Element
	emailField: (props: any) => JSX.Element
	passwordField: (props: any) => JSX.Element
}

export const LoginWindow = ({ form, emailField, passwordField, className, ...otherProps }: LoginWindowProps) => {
	const LoginForm = form
	const EmailField = emailField
	const PasswordField = passwordField
	
	return (
		<div
			className={ cn(styles.container, className) }
			{ ...otherProps }
		>
			<div className={ cn(styles.headline) }>Вход</div>
			<LoginForm>
				<Form.FieldGroup>
					<EmailField/>
					<PasswordField/>
				</Form.FieldGroup>
				<Form.SubmitButton>Войти</Form.SubmitButton>
			</LoginForm>
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
}