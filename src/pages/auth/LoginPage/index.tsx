import styles from './.module.sass'
import cn from 'classnames'
import { Page } from 'shared/ui/containers/Page'
import { LoginWindowWidget } from 'widgets/auth/LoginWindowWidget'

export const LoginPage = () => {
	
	return (
		<Page>
			<div className={ cn(styles.container) }>
				<LoginWindowWidget/>
			</div>
		</Page>
	)
}