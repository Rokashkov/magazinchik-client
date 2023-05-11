import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps } from 'react'
import { IoRadioButtonOffOutline, IoRadioButtonOnOutline } from 'react-icons/io5'

interface RadioButtonProps extends ComponentProps<'button'> {
	selected?: boolean
}

export const RadioButton = ({ disabled, selected, className, ...otherProps }: RadioButtonProps) => {
	
	return (
		<button
			className={ cn(
				styles.button,
				styles[selected && 'selected'],
				styles[disabled && 'disabled'],
				className
			) }
			{ ...otherProps }
		>
			<div className={ cn(styles.state) }>
				{ !selected && <IoRadioButtonOffOutline className={ cn(styles.icon) }/> }
				{ selected && <IoRadioButtonOnOutline className={ cn(styles.icon) }/> }
			</div>
		</button>
	)
}