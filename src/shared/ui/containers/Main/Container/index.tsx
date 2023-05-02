import styles from './.module.sass'
import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import { ComponentProps } from 'react'
import { store } from 'shared/model'

export type ContainerProps = ComponentProps<'main'>

export const Container = observer(({ children, className, ...otherProps }: ContainerProps) => {
	
	return (
		<main
			className={ cn(
				styles.container,
				className,
				styles[store.isPageLoading && 'loading']
			) }
			{ ...otherProps }
		>
			{ children }
		</main>
	)
})