import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps } from 'react'
import { IconType } from 'react-icons'

export interface IconButtonProps extends Omit<ComponentProps<'button'>, 'children'> {
	iconOutline: IconType
	iconFilled?: IconType
	selected?: boolean
	placedOn?: 'on-surface' | 'inverse-surface'
	selectedColor?: 'primary' | 'error'
}

export const IconButton = ({ selectedColor, placedOn, iconOutline, iconFilled, type, selected, className, ...otherProps }: IconButtonProps) => {
	const IconOutline = iconOutline
	const IconFilled = iconFilled
	
	return (
		<button
			type={  type || 'button' }
			className={ cn(
				className,
				styles.container,
				styles[selected && 'selected'],
				styles[selectedColor ?? 'primary'],
				styles[placedOn ?? 'on-surface'],
			) }
			{ ...otherProps }
		>
			<div className={ cn(styles.state) }>
				{ !selected && <IconOutline className={ cn(styles.icon) }/> }
				{ selected && <IconFilled className={ cn(styles.icon) }/> }
			</div>
		</button>
	)
}