import styles from './.module.sass'
import cn from 'classnames'
import { observer } from 'mobx-react-lite'


export const Footer = observer(() => {
	
	return (
		<footer className={ cn(styles.footer) }>Footer Deckstop</footer>
	)
})