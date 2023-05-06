import { productStore } from 'entities/product/store'
import styles from './.module.sass'
import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import Image from 'next/image'
import { ComponentProps } from 'react'
import { switchDisplayedPhotoStore } from 'features/switch-displaeyd-photo/store'

interface ItemProps extends ComponentProps<'button'> {
	index: number
}

export const Item = observer(({ index, className, ...otherProps }: ItemProps) => {

	return (
		<button
			onClick={ () => switchDisplayedPhotoStore.setIndex(index) }
			className={ cn(
				styles.container,
				styles[switchDisplayedPhotoStore.index === index && 'selected'],
				className
			) }
			{ ...otherProps }
		>
			<Image
				className={ cn(styles.photo) }
				width={ 48 }
				height={ 48 }
				alt=''
				src={ `/${ productStore.photos[index] }` }
			/>
		</button>
	)
})