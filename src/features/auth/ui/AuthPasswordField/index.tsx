import { authStore } from 'entites/auth/model'
import { PasswordField, PasswordFieldProps } from 'shared/ui/fields/PasswordField'

type AuthPasswordFieldProps = Omit<PasswordFieldProps, 'placeholder'>

export const AuthPasswordField = ({ onChange, ...otherProps }: AuthPasswordFieldProps) => {
	
	return (
		<PasswordField
			onChange={ (e) => {
				authStore.setPassword(e.currentTarget.value)
				onChange && onChange(e)
			} }
			placeholder='Пароль'
			{ ...otherProps }
		/>
	)
}