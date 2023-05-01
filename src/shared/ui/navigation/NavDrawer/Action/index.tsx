import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps } from 'react'
import { IconType } from 'react-icons'
import { store } from 'shared/model'

interface ActionProps extends Omit<ComponentProps<'div'>, 'children'> {
	icon: IconType
	children: string
}

export const Action = ({ onClick, icon, children, className, ...otherProps }: ActionProps) => {
	const Icon = icon

	return (
		<div
			className={ cn(styles.container, className) }
			onClick={ (e) => {
				store.setIsNavDrawerVisible(false)
				onClick && onClick(e)
			} }
			{ ...otherProps }
		>
			<div className={ cn(styles.frame) }>
				<div className={ cn(styles.state) }>
					<div className={ cn(styles.group) }>
						<Icon className={ styles.icon }/>
						<div className={ cn(styles.text) }>{ children }</div>
					</div>
				</div>
			</div>
		</div>
	)
}