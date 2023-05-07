import { productStore } from 'entities/product/store'
import styles from './.module.sass'
import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import Image from 'next/image'
import { ComponentProps } from 'react'

interface ItemProps extends ComponentProps<'button'> {
	index: number
}

export const Item = observer(({ index, className, ...otherProps }: ItemProps) => {
	const { displayedPhotoIndex, photos } = productStore

	return (
		<button
			onClick={ () => productStore.setDisplayedPhotoIndex(index) }
			className={ cn(
				styles.container,
				styles[displayedPhotoIndex === index && 'selected'],
				className
			) }
			{ ...otherProps }
		>
			<Image
				draggable={ false }
				className={ cn(styles.photo) }
				width={ 48 }
				height={ 48 }
				alt=''
				src={ `/${ photos[index] }` }
			/>
		</button>
	)
})