import { CSSTransition } from 'react-transition-group'
import styles from './.module.sass'
import cn from 'classnames'
import { useRef } from 'react'
import { observer } from 'mobx-react-lite'
import { store } from 'shared/model/store'

export const LaunchScreen = observer(() => {
	const ref = useRef(null)
	const { isPageLoading } = store
	
	return (
		<CSSTransition
			in={ isPageLoading }
			nodeRef={ ref }
			timeout={ {
				enter: 300,
				exit: 0
			} }
			classNames={ {
				enter: styles.enter,
				enterDone: styles.enterDone,
				exit: styles.exit
			} }
			mountOnEnter
			unmountOnExit
		>
			<div
				ref={ ref }
				className={ cn(styles.container) }
			>
				<div className={ cn(styles.spinner) }/>
			</div>
		</CSSTransition>
	)
})