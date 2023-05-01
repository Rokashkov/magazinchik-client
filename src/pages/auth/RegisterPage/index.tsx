import { RegisterWindowWidget } from 'widgets/auth/RegisterWindowWidget'
import styles from './.module.sass'
import cn from 'classnames'

export const RegisterPage = () => {
	
	return (
		<div className={ cn(styles.container) }>
			<RegisterWindowWidget/>
		</div>
	)
}