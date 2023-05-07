import styles from './.module.sass'
import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import { store } from 'shared/model/store'

export const LaunchScreen = observer(() => {
	const { isPageLoading } = store
	
	return isPageLoading && (
		<div className={ cn(styles.container) }>
			<div className={ cn(styles.spinner) }/>
		</div>
	)
})