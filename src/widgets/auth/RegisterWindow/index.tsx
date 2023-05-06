import styles from './.module.sass'
import cn from 'classnames'
import { AuthEmailField } from 'features/auth/ui/AuthEmailField'
import { AuthNameField } from 'features/auth/ui/AuthNameField'
import { AuthPasswordField } from 'features/auth/ui/AuthPasswordField'
import { RegisterForm } from 'features/auth/ui/RegisterForm'
import Link from 'next/link'
import { ComponentProps } from 'react'
import Form from 'shared/ui/other/Form'

type RegisterWindowProps = Omit<ComponentProps<'div'>, 'children'>

export const RegisterWindow = ({ className, ...otherProps }: RegisterWindowProps) => {
	
	return (
		<div
			className={ cn(styles.container, className) }
			{ ...otherProps }
		>
			<div className={ cn(styles.headline) }>Регистрация</div>
			<RegisterForm>
				<Form.FieldGroup>
					<AuthNameField/>
					<AuthEmailField/>
					<AuthPasswordField/>
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