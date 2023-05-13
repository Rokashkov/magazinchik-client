import styles from './.module.sass'
import cn from 'classnames'
import { Product } from 'shared/api/types/Product'
import { CommentsThumbnail } from '../CommentsThumbnail'
import { RatingThumbnail } from '../RatingThumbnail'
import { FilledTextButton } from 'shared/ui/buttons/FilledTextButton'
import Link from 'next/link'
import { NextLinkProps } from 'shared/types/NextLinkProps'
import { IconButton } from 'shared/ui/buttons/IconButton'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'
import { useState } from 'react'

interface ProductShortcutProps extends Omit<NextLinkProps, 'href' | 'dragable'> {
	product: Product
}

export const ProductShortcut = ({ product, className, ...otherProps }: ProductShortcutProps) => {
	const { name, photos, commentsCount, averageRating, price, slug } = product
	const [isSelected, setIsSelected] = useState(false)

	return (
		<Link
			className={ cn(styles.container, className) }
			href={ `/product/${ slug }` }
			draggable={ false }
			{ ...otherProps }
		>
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
			<div className={ cn(styles.state) }/>
			{ photos && photos.length !== 0 && (
				<img
					loading='lazy'
					draggable='false'
					alt=''
					src={ `${ process.env.NEXT_PUBLIC_API_URL }/product_photo/${ photos[0] }` }
					className={ cn(styles.photo) }
				/>
			) }
			{ (!photos || !photos.length) && (
				<div className={ cn(styles.placeholder) }/>
			) }
			<div className={ cn(styles.content) }>
				<div className={ cn(styles.group) }>
					<div className={ cn(styles.name) }>{ name }</div>
					<div className={ cn(styles.stats) }>
						<RatingThumbnail averageRating={ averageRating }/>
						<CommentsThumbnail commentsCount={ commentsCount }/>
					</div>
				</div>
				<div className={ cn(styles.group) }>
					<div className={ cn(styles.price) }>{ price } <span>₽</span></div>
					<FilledTextButton
						onClickCapture={ (e) => {
							e.preventDefault()
						} }
						className={ cn(styles.button) }
					>
						В корзину
					</FilledTextButton>
				</div>
			</div>
		</Link>
	)
}