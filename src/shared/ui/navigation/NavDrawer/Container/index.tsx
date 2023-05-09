import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps, TouchEventHandler, useRef, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { store } from 'shared/lib/store'
import { CSSTransition } from 'react-transition-group'

export type ContainerProps = ComponentProps<'nav'>

export const Container = observer(({ children, className, ...otherProps }: ContainerProps) => {
	const ref = useRef(null)
	const [touchStart, setTouchStart] = useState(0)
	const [touchEnd, setTouchEnd] = useState(0)

	const handleTouchStart: TouchEventHandler = (e) => {
		setTouchStart(e.targetTouches[0].clientX)
		setTouchEnd(e.targetTouches[0].clientX)
	}

	const handleTouchMove: TouchEventHandler = (e) => {
		setTouchEnd(e.targetTouches[0].clientX)
	}

	const handleTouchEnd: TouchEventHandler = () => {
		if (touchStart - touchEnd > 150) {
			store.setIsNavDrawerVisible(false)
		}
	}
	
	return (
		<CSSTransition
			nodeRef={ ref }
			in={ store.isNavDrawerVisible }
			timeout={ {
				enter: 300,
				exit: 200
			} }
			classNames={ {
				enter: styles.enter,
				enterDone: styles.enterDone,
				exit: styles.exit
			} }
		>
			<nav
				ref={ ref }
				className={ cn(styles.container, className) }
				{ ...otherProps }
				onTouchStart={ handleTouchStart }
				onTouchMove={ handleTouchMove }
				onTouchEnd={ handleTouchEnd }
			>
				{ children }
			</nav>
		</CSSTransition>
	)
})