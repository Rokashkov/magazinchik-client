import { authStore } from 'features/auth/store'
import { TextField, TextFieldProps } from 'shared/ui/fields/TextField'

type AuthEmailFieldProps = Omit<TextFieldProps, 'placeholder'>

export const AuthEmailField = ({ onChange, ...otherProps }: AuthEmailFieldProps) => {
	
	return (
		<TextField
			onChange={ (e) => {
				authStore.setEmail(e.currentTarget.value)
				onChange && onChange(e)
			} }
			placeholder='Email'
			{ ...otherProps }
		/>
	)
}