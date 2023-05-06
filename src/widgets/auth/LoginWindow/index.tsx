import { observer } from 'mobx-react-lite'
import styles from './.module.sass'
import cn from 'classnames'
import Link from 'next/link'
import { ComponentProps } from 'react'
import Form from 'shared/ui/other/Form'
import { AuthEmailField } from 'features/auth/ui/AuthEmailField'
import { AuthPasswordField } from 'features/auth/ui/AuthPasswordField'
import { LoginForm } from 'features/auth/ui/LoginForm'

type LoginWindowProps = Omit<ComponentProps<'div'>, 'children'>

export const LoginWindow = observer(({ className, ...otherProps }: LoginWindowProps) => {
	
	return (
		<div
			className={ cn(styles.container, className) }
			{ ...otherProps }
		>
			<div className={ cn(styles.headline) }>Вход</div>
			<LoginForm>
				<Form.FieldGroup>
					<AuthEmailField/>
					<AuthPasswordField/>
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
})