import styles from './.module.sass'
import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IconType } from 'react-icons'
import { globalStore } from 'shared/model'

interface ItemProps {
	href: string
	iconOutline: IconType
	iconFilled: IconType
	children: string
}

export const Item = observer(({ iconOutline, iconFilled, children, href }: ItemProps) => {
	const IconOutline = iconOutline
	const IconFilled = iconFilled
	const [isSelected, setIsSelected] = useState<boolean>(globalStore.path === href)

	useEffect(() => {
		if (globalStore.path === href) {
			setIsSelected(true)
		} else {
			setIsSelected(false)
		}
	}, [globalStore.path])

	return (
		<Link
			href={ href }
			className={ cn(
				styles.container,
				styles[isSelected && 'selected']
			) }
		>
			<div className={ cn(styles.frame) }>
				<div className={ cn(styles.state) }>
					{ isSelected && <IconFilled className={ styles.icon }/> }
					{ !isSelected && <IconOutline className={ styles.icon }/> }
				</div>
			</div>
			<div className={ cn(styles.text) }>{ children }</div>
		</Link>
	)
})