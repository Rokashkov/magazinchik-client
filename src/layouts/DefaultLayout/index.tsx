import styles from './.module.sass'
import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import { LayoutProps } from 'shared/types'

export interface DefaultLayoutProps extends LayoutProps {}

export const DefaultLayout = observer(({ children, className, ...otherProps }: DefaultLayoutProps) => {
	
	return (
		<div
			className={ cn(styles.container, className) }
			{ ...otherProps }
		>
			{ children }
		</div>
	)
})