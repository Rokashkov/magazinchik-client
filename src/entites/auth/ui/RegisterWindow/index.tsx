import styles from './.module.sass'
import cn from 'classnames'
import Link from 'next/link'
import { ComponentProps, ReactNode } from 'react'
import Form from 'shared/ui/containers/Form'

interface RegisterWindowProps extends Omit<ComponentProps<'div'>, 'children'> {
	form: (props: { children?: ReactNode }) => JSX.Element
	nameField: (props: any) => JSX.Element
	emailField: (props: any) => JSX.Element
	passwordField: (props: any) => JSX.Element
}

export const RegisterWindow = ({ form, nameField, emailField, passwordField, className, ...otherProps }: RegisterWindowProps) => {
	const RegisterForm = form
	const NameField = nameField
	const EmailField = emailField
	const PasswordField = passwordField
	
	return (
		<div
			className={ cn(styles.container, className) }
			{ ...otherProps }
		>
			<div className={ cn(styles.headline) }>Регистрация</div>
			<RegisterForm>
				<Form.FieldGroup>
					<NameField/>
					<EmailField/>
					<PasswordField/>
				</Form.FieldGroup>
				<Form.SubmitButton>Зарегистрироваться</Form.SubmitButton>
			</RegisterForm>
			<div className={ cn(styles.group) }>
				<div className={ cn(styles.small) }>или</div>
				<Link
					className={ cn(styles.link) }
					href='/login'
				>
					Войти
				</Link>
			</div>
		</div>
	)
}