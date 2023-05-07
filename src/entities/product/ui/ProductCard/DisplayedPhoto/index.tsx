import { productStore } from 'entities/product/store'
import styles from './.module.sass'
import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import { ComponentProps, MouseEventHandler, TouchEventHandler, useState } from 'react'
import { IconButton } from 'shared/ui/buttons/IconButton'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'

type DisplayedPhotoProps = ComponentProps<'img'> 

export const DisplayedPhoto = observer(({ className, ...otherProps }: DisplayedPhotoProps) => {
	const { displayedPhotoIndex, photos } = productStore
	const [touchStart, setTouchStart] = useState(0)
	const [touchEnd, setTouchEnd] = useState(0)
	const [clickStart, setClickStart] = useState(0)
	const [clickEnd, setClickEnd] = useState(0)
	const [isSelected, setIsSelected] = useState(false)

	const handleTouchStart: TouchEventHandler = (e) => {
		setTouchStart(e.targetTouches[0].clientX)
		setTouchEnd(e.targetTouches[0].clientX)
	}

	const handleTouchMove: TouchEventHandler = (e) => {
		setTouchEnd(e.targetTouches[0].clientX)
	}

	const handleTouchEnd: TouchEventHandler = () => {
		if (touchStart && touchEnd) {
			if (touchStart - touchEnd > 100) {
				productStore.setDisplayedPhotoIndex(displayedPhotoIndex - 1)
			} else if (touchEnd - touchStart > 100) {
				productStore.setDisplayedPhotoIndex(displayedPhotoIndex + 1)
			}

			setTouchStart(0)
			setTouchEnd(0)
		}
	}

	const handleClickStart: MouseEventHandler = (e) => {
		setClickStart(e.clientX)
		setClickEnd(e.clientX)
	}

	const handleClickMove: MouseEventHandler = (e) => {
		setClickEnd(e.clientX)
	}

	const handleClickEnd: MouseEventHandler = () => {
		if (clickStart && clickEnd) {
			if (clickStart - clickEnd > 100) {
				productStore.setDisplayedPhotoIndex(displayedPhotoIndex - 1)
			} else if (clickEnd - clickStart > 100) {
				productStore.setDisplayedPhotoIndex(displayedPhotoIndex + 1)
			}

			setClickStart(0)
			setClickEnd(0)
		}
	}

	return (
		<div className={ cn(styles.container) }>
			<IconButton
				selected={ isSelected }
				selectedColor='error'
				className={ cn(styles.like) }
				iconOutline={ IoHeartOutline }
				iconFilled={ IoHeart }
				onClickCapture={ (e) => {
					e.preventDefault()
				} }
				onClick={ () => setIsSelected(!isSelected) }
			/>
			{ photos.length === 0  && <div className={ cn(styles.placeholder) }/> }
			{ photos.length > 0 && (
				<img
					loading='lazy'
					draggable={ false }
					onTouchStart={ handleTouchStart }
					onTouchMove={ handleTouchMove }
					onTouchEnd={ handleTouchEnd }
					onMouseDown={ handleClickStart }
					onMouseMove={ handleClickMove }
					onMouseLeave={ handleClickEnd }
					onMouseUp={ handleClickEnd }
					alt=''
					src={ `/${ photos[displayedPhotoIndex] }` }
					className={ cn(styles.photo, className) }
					{ ...otherProps }
				/>
			) }
		</div>
	)
})