import { AuthEmailField } from 'features/auth/ui/AuthEmailField'
import { LoginForm } from 'features/auth/ui/LoginForm'
import { LoginWindow } from 'entites/auth/ui/LoginWindow'
import { AuthPasswordField } from 'features/auth/ui/AuthPasswordField'

export const LoginWindowWidget = () => {
	
	return (
		<LoginWindow
			form={ LoginForm }
			emailField={ AuthEmailField }
			passwordField={ AuthPasswordField }
		/>
	)
}