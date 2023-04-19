import { observer } from 'mobx-react-lite'
import { ReactNode } from 'react'
import styles from './.module.sass'
import cn from 'classnames'

export interface MainProps {
	children?: ReactNode
}

export const Main = observer(({ children }: MainProps) => {
	
	return (
		<main className={ cn(styles.main) }>{ children }</main>
	)
})