import { IMainProps } from './IMainProps'
import styles from './MainMobile.module.sass'
import cn from 'classnames'

export const MainMobile = ({ children }: IMainProps) => {
	
	return (
		<main className={ cn(styles.main) }>{ children }</main>
	)
}