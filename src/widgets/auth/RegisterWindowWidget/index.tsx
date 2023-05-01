import { RegisterWindow } from 'entites/auth/ui/RegisterWindow'
import { AuthEmailField } from 'features/auth/ui/AuthEmailField'
import { AuthNameField } from 'features/auth/ui/AuthNameField'
import { AuthPasswordField } from 'features/auth/ui/AuthPasswordField'
import { RegisterForm } from 'features/auth/ui/RegisterForm'

export const RegisterWindowWidget = () => {
	
	return (
		<RegisterWindow
			form={ RegisterForm }
			nameField={ AuthNameField }
			emailField={ AuthEmailField }
			passwordField={ AuthPasswordField }
		/>
	)
}