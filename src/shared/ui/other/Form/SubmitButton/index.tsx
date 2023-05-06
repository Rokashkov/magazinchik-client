import styles from './.module.sass'
import cn from 'classnames'
import { FilledTextButton, FilledTextButtonProps } from 'shared/ui/buttons/FilledTextButton'

type SubmitButtonProps = Omit<FilledTextButtonProps, 'type'>

export const SubmitButton = ({ children, className, ...otherProps }: SubmitButtonProps) => {
	
	return (
		<FilledTextButton
			type='submit'
			className={ cn(styles.container, className) }
			{ ...otherProps }
		>
			{ children }
		</FilledTextButton>
	)
}