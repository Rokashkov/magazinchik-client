import { RegisterForm } from 'widgets/auth/RegisterForm'
import styles from './.module.sass'
import cn from 'classnames'

export const RegisterPage = () => {
	
	return (
		<div className={ cn(styles.container) }>
			<RegisterForm/>
		</div>
	)
}