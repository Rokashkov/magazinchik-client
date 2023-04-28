import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps } from 'react'

interface DefaultFooterProps extends ComponentProps<'footer'> {}

export const DefaultFooter = ({ ...otherProps }: DefaultFooterProps) => {
	
	return (
		<footer
			className={ cn(styles.container) }
			{ ...otherProps }
		>
			<p className={ cn(styles.text) }>
				Developed by
				{' '}
				<a
					target='__blank'
					href='https://github.com/isoniazid'
				>
					Vasek
				</a>
				{' '}
				&
				{' '}
				<a
					target='__blank'
					href='https://github.com/Rokashkov'
				>
					Vovchik
				</a>
				{' '}
				with ❤
			</p>
		</footer>
	)
}