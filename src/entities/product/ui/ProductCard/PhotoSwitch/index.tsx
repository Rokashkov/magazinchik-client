import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps } from 'react'
import { observer } from 'mobx-react-lite'
import { productStore } from 'entities/product/store'
import { Item } from './Item'

interface PhotoSwitchProps extends ComponentProps<'div'> {}

export const PhotoSwitch = observer(({ className, ...otherProps }: PhotoSwitchProps) => {
	const { photos } = productStore

	return !!photos && photos.length > 0 &&(
		<div
			className={ cn(styles.container, className) }
			{ ...otherProps }
		>
			{ photos.map(src => {
				const index = photos.indexOf(src)

				return (
					<Item
						key={ index }
						index={ index }
					/>
				)
			}) }
		</div>
	)
})