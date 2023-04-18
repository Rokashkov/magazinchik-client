import { observer } from 'mobx-react-lite'
import styles from './BrandedLaunchScreen.module.sass'
import cn from 'classnames'
import { useRef } from 'react'
import { IoStorefrontOutline } from 'react-icons/io5'
import { CSSTransition } from 'react-transition-group'
import { appStore } from 'shared/model/appStore'

export const BrandedLaunchScreen = observer(() => {
	const ref = useRef(null)
	
	return (
		<CSSTransition
			nodeRef={ ref }
			unmountOnExit
			in={ !appStore.isLaunched }
			timeout={ {
				exit: 1000
			} }
			onExited={ () => {
				document.body.classList.add('free')
			} }
		>
			<div 
				ref={ ref }
				className={ cn(styles.container) }
			>
				<IoStorefrontOutline className={ cn(styles.logo) }/>
			</div>
		</CSSTransition>
	)
})