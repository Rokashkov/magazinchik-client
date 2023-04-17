import { IMainProps } from './IMainProps'
import styles from './MainDeckstop.module.sass'
import cn from 'classnames'

export const MainDeckstop = ({ children }: IMainProps) => {
	
	return (
		<main className={ cn(styles.main) }>{ children }</main>
	)
}