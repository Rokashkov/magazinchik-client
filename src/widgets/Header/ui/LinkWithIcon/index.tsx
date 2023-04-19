import styles from './.module.sass'
import cn from 'classnames'
import Link from 'next/link'
import { IconType } from 'react-icons'

export interface LinkWithIconProps {
	icon: IconType
	children: string
	href: string
}

export const LinkWithIcon = ({ href, icon, children }: LinkWithIconProps) => {
	const Icon = icon
	
	return (
		<Link
			className={ cn(styles.link) }
			href={ href }
		>
			<Icon className={ cn(styles.icon) }/>
			<div className={ cn(styles.text) }>{ children }</div>
		</Link>
	)
}