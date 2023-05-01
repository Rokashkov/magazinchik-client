import styles from './.module.sass'
import cn from 'classnames'
import { LoginWindowWidget } from 'widgets/auth/LoginWindowWidget'

export const LoginPage = () => {
	
	return (
		<div className={ cn(styles.container) }>
			<LoginWindowWidget/>
		</div>
	)
}