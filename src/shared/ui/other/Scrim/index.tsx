import styles from './.module.sass'
import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import { ComponentProps, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { store } from 'shared/lib/store'

interface ScrimProps extends ComponentProps<'div'> {}

export const Scrim = observer(({ ...otherProps }: ScrimProps) => {
	const ref = useRef(null)
	
	return (
		<CSSTransition
			nodeRef={ ref }
			mountOnEnter
			unmountOnExit
			in={ store.isScrimVisible }
			timeout={ 300 }
			classNames={ {
				enter: styles.enter,
				enterDone: styles.enterDone,
				exit: styles.exit
			} }
		>
			<div
				ref={ ref }
				className={ cn(styles.container) }
				{ ...otherProps }
				onClick={ () => store.setIsScrimVisible(false) }
			/>
		</CSSTransition>
	)
})