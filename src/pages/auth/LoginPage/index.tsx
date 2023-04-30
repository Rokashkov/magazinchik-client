import styles from './.module.sass'
import cn from 'classnames'
import { LoginForm } from 'widgets/auth/LoginForm'

export const LoginPage = () => {
	
	return (
		<div className={ cn(styles.container) }>
			<LoginForm/>
		</div>
	)
}