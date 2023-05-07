import styles from './.module.sass'
import cn from 'classnames'
import { Page } from 'shared/ui/other/Page'
import { RegisterWindow } from 'widgets/auth/RegisterWindow'

export const RegisterPage = () => {
	
	return (
		<Page className={ cn(styles.container) }>
			<RegisterWindow/>
		</Page>
	)
}