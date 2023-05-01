import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps, useEffect, useRef, useState } from 'react'
import { IconButton } from '../../buttons/IconButton'
import { IoCloseOutline } from 'react-icons/io5'
import { CSSTransition } from 'react-transition-group'
import { store } from 'shared/model'
import { observer } from 'mobx-react-lite'

interface SnackbarProps extends ComponentProps<'div'> {}

export const Snackbar = observer(({ className, ...otherProps }: SnackbarProps) => {
	const ref = useRef(null)
	const [isAppeared, setIsAppeared] = useState(false)
	const timeoutRef = useRef(null)

	useEffect(() => {
		clearTimeout(timeoutRef.current)

		if (store.snackbarMessage) {
			setIsAppeared(true)
			timeoutRef.current = setTimeout(() => (setIsAppeared(false)), 5000)
		}
	}, [store.snackbarMessage])

	return  (
		<CSSTransition
			in={ isAppeared }
			nodeRef={ ref }
			classNames={ {
				enter: styles.enter,
				enterDone: styles.enterDone,
				exit: styles.exit
			} }
			timeout={ {
				enter: 200,
				exit: 200
			} }
			mountOnEnter
			unmountOnExit
			onExited={ () => store.setSnackbarMessage('') }
		>
			<div
				ref={ ref }
				className={ cn(styles.container, className) }
				{ ...otherProps }
			>
				{ store.snackbarMessage }
				<IconButton
					onClick={ () => setIsAppeared(false) }
					className={ cn(styles.icon) }
					placedOn='inverse-surface'
					iconOutline={ IoCloseOutline }
				/>
			</div>
		</CSSTransition>
	)
})