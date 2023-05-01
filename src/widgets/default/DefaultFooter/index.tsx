import Footer, { FooterProps } from 'shared/ui/containers/Footer'
import styles from './.module.sass'
import cn from 'classnames'

export const DefaultFooter = ({ ...otherProps }: FooterProps) => {
	
	return (
		<Footer { ...otherProps }>
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
		</Footer>
	)
}