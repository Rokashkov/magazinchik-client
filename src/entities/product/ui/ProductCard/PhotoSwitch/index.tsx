import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps } from 'react'
import { observer } from 'mobx-react-lite'
import { Item } from './Item'

interface PhotoSwitchProps extends ComponentProps<'div'> {
	photos: string[]
}

export const PhotoSwitch = observer(({ photos, className, ...otherProps }: PhotoSwitchProps) => {

	return (
		<div
			className={ cn(styles.container, className) }
			{ ...otherProps }
		>
			{ photos.map(src => {
				const index = photos.indexOf(src)

				return (
					<Item
						photos={ photos }
						key={ index }
						index={ index }
					/>
				)
			}) }
		</div>
	)
})