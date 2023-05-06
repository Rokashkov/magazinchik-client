import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps } from 'react'
import { IconButton } from '../../buttons/IconButton'
import { IoCloseOutline } from 'react-icons/io5'
import { store } from 'shared/model/store'
import { observer } from 'mobx-react-lite'

interface SnackbarProps extends ComponentProps<'div'> {}

export const Snackbar = observer(({ className, ...otherProps }: SnackbarProps) => {

	return (store.snackbarMessage || store.isSnackbarLoading) && (
		<div
			className={ cn(
				styles.container,
				styles[store.isSnackbarLoading && 'loading'],
				className
			) }
			{ ...otherProps }
		>
			{ !store.isSnackbarLoading && (
				<>
					{ store.snackbarMessage }
					<IconButton
						onClick={ () => store.setSnackbarMessage('') }
						className={ cn(styles.icon) }
						placedOn='inverse-surface'
						iconOutline={ IoCloseOutline }
					/>
				</>
			) }
			{ store.isSnackbarLoading && <div className={ cn(styles.spinner) }/> }
		</div>
	)
})