import { authStore } from 'features/auth/store'
import { TextField, TextFieldProps } from 'shared/ui/fields/TextField'

type AuthNameFieldProps = Omit<TextFieldProps, 'placeholder'>

export const AuthNameField = ({ onChange, ...otherProps }: AuthNameFieldProps) => {
	
	return (
		<TextField
			onChange={ (e) => {
				authStore.setName(e.currentTarget.value)
				onChange && onChange(e)
			} }
			placeholder='Имя'
			{ ...otherProps }
		/>
	)
}