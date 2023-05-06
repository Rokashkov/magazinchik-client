import { motion as Motion } from 'framer-motion'
import styles from './.module.sass'
import cn from 'classnames'

export const Page = ({ children, className,...otherProps }: Parameters<typeof Motion.div>[0]) => {

	return (
		<Motion.div
			initial={ { x: 100, opacity: 0 } }
			animate={ { x: 0, opacity: 1 } }
			exit={ { x: 100, opacity: 0 } }
			className={ cn(styles.container, className) }
			transition={ {
				type: 'spring',
				stiffness: 100,
				damping: 20,
			} }
			{ ...otherProps }
		>
			{ children }
		</Motion.div>
	)
}