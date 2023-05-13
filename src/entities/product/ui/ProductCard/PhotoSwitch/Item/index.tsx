import { productStore } from 'entities/product/store'
import styles from './.module.sass'
import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import { ComponentProps } from 'react'

interface ItemProps extends ComponentProps<'button'> {
	index: number
	photos: string[]
}

export const Item = observer(({ photos, index, className, ...otherProps }: ItemProps) => {
	const { displayedPhotoIndex } = productStore

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
			<img
				draggable={ false }
				className={ cn(styles.photo) }
				alt=''
				src={ `${ process.env.NEXT_PUBLIC_API_URL }/product_photo/${ photos[index] }` }
			/>
		</button>
	)
})