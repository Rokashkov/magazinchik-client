import { productStore } from 'entities/product/store'
import styles from './.module.sass'
import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import { ComponentProps, TouchEventHandler, useState } from 'react'
import { switchDisplayedPhotoStore } from 'features/switch-displaeyd-photo/store'

type DisplayedPhotoProps = ComponentProps<'img'> 

export const DisplayedPhoto = observer(({ className, ...otherProps }: DisplayedPhotoProps) => {
	const { photos } = productStore
	const [touchStart, setTouchStart] = useState(0)
	const [touchEnd, setTouchEnd] = useState(0)

	const handleTouchStart: TouchEventHandler = (e) => {
		setTouchStart(e.targetTouches[0].clientX)
		setTouchEnd(e.targetTouches[0].clientX)
	}

	const handleTouchMove: TouchEventHandler = (e) => {
		setTouchEnd(e.targetTouches[0].clientX)
	}

	const handleTouchEnd: TouchEventHandler = () => {
		if (touchStart - touchEnd > 150) {
			switchDisplayedPhotoStore.setIndex(switchDisplayedPhotoStore.index - 1)
		} else if (touchEnd - touchStart > 150) {
			switchDisplayedPhotoStore.setIndex(switchDisplayedPhotoStore.index + 1)
		}
	}

	return (
		<>
			{ !photos && <div className={ cn(styles.placeholder) }/> }
			{ photos && (
				<img
					onTouchStart={ handleTouchStart }
					onTouchMove={ handleTouchMove }
					onTouchEnd={ handleTouchEnd }
					alt=''
					src={ `/${ photos[switchDisplayedPhotoStore.index] }` }
					className={ cn(styles.photo, className) }
					{ ...otherProps }
				/>
			) }
		</>
	)
})