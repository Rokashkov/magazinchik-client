import { observer } from 'mobx-react-lite'
import styles from './.module.sass'
import cn from 'classnames'
import { useRef } from 'react'
import { IoStorefrontOutline } from 'react-icons/io5'
import { CSSTransition } from 'react-transition-group'
import { globalStore } from 'shared/model'

export const LaunchScreen = observer(() => {
	const ref = useRef(null)
	
	return (
		<CSSTransition
			nodeRef={ ref }
			unmountOnExit
			in={ !globalStore.isLaunched }
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