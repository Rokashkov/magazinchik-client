import styles from './.module.sass'
import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import NextLink from 'next/link'
import { useEffect, useState } from 'react'
import { IconType } from 'react-icons'
import { store } from 'shared/model'
import { NextLinkProps } from 'shared/types/NextLinkProps'

interface LinkProps extends Omit<NextLinkProps, 'children'> {
	iconOutline: IconType
	iconFilled: IconType
	children: string
}

export const Link = observer(({ onClick, iconOutline, iconFilled, children, href, className, ...otherProps }: LinkProps) => {
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
			onClick={ (e) => {
				store.setIsNavDrawerVisible(false)
				onClick && onClick(e)
			} }
			{ ...otherProps }
		>
			<div className={ cn(styles.frame) }>
				<div className={ cn(styles.state) }>
					<div className={ cn(styles.group) }>
						{ isSelected && <IconFilled className={ styles.icon }/> }
						{ !isSelected && <IconOutline className={ styles.icon }/> }
						<div className={ cn(styles.text) }>{ children }</div>
					</div>
				</div>
			</div>
		</NextLink>
	)
})