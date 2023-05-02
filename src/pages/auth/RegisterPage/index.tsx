import { RegisterWindowWidget } from 'widgets/auth/RegisterWindowWidget'
import styles from './.module.sass'
import cn from 'classnames'
import { Page } from 'shared/ui/containers/Page'

export const RegisterPage = () => {
	
	return (
		<Page>
			<div className={ cn(styles.container) }>
				<RegisterWindowWidget/>
			</div>
		</Page>
	)
}