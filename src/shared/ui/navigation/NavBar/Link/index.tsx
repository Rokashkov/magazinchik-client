import styles from './.module.sass'
import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import NextLink from 'next/link'
import { useEffect, useState } from 'react'
import { IconType } from 'react-icons'
import { store } from 'shared/lib/store'
import { NextLinkProps } from 'shared/types/NextLinkProps'

interface LinkProps extends Omit<NextLinkProps, 'children'> {
	iconOutline: IconType
	iconFilled: IconType
	children: string
}

export const Link = observer(({ iconOutline, iconFilled, children, href, className, ...otherProps }: LinkProps) => {
	const IconOutline = iconOutline
	const IconFilled = iconFilled
	const [isSelected, setIsSelected] = useState<boolean>(store.path === href)

	useEffect(() => {
		if (store.path === href) {
			setIsSelected(true)
		} else {
			setIsSelected(false)
		}
	}, [store.path])

	return (
		<NextLink
			href={ href }
			className={ cn(
				styles.container,
				styles[isSelected && 'selected'],
				className
			) }
			{ ...otherProps }
		>
			<div className={ cn(styles.frame) }>
				<div className={ cn(styles.state) }>
					{ isSelected && <IconFilled className={ styles.icon }/> }
					{ !isSelected && <IconOutline className={ styles.icon }/> }
				</div>
			</div>
			<div className={ cn(styles.text) }>{ children }</div>
		</NextLink>
	)
})