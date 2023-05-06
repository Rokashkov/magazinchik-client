import styles from './.module.sass'
import cn from 'classnames'
import { Page } from 'shared/ui/other/Page'
import { LoginWindow } from 'widgets/auth/LoginWindow'

export const LoginPage = () => {
	
	return (
		<Page>
			<div className={ cn(styles.container) }>
				<LoginWindow/>
			</div>
		</Page>
	)
}