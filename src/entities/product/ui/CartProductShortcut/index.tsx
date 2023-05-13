import styles from './.module.sass'
import cn from 'classnames'
import Link from 'next/link'
import { useState } from 'react'
import { IoAddOutline, IoCloseOutline, IoHeart, IoHeartOutline, IoRadioButtonOffOutline, IoRadioButtonOnOutline, IoRemoveOutline } from 'react-icons/io5'
import { Product } from 'shared/api/types/Product'
import { NextLinkProps } from 'shared/types/NextLinkProps'
import { IconButton } from 'shared/ui/buttons/IconButton'
import { NumberField } from 'shared/ui/fields/NumberField'

interface CartProductShortcutProps extends Omit<NextLinkProps, 'href' | 'dragable'> {
	product: Product
	productCount: number
}

export const CartProductShortcut = ({ productCount, product, className, ...otherProps }: CartProductShortcutProps) => {
	const { name, slug, price, photos } = product
	const [isRadioSelected, setIsRadioSelected] = useState(false)
	const [isLikeSelected, setIsLikeSelected] = useState(false)
	const [count, setCount] = useState(productCount)

	return (
		<Link
			draggable={ false }
			className={ cn(styles.container, className) }
			href={ `/product/${ slug }` }
			{ ...otherProps }
		>
			<IconButton
				selected={ isRadioSelected }
				className={ cn(styles.icon, styles.radio) }
				iconOutline={ IoRadioButtonOffOutline }
				iconFilled={ IoRadioButtonOnOutline }
				onClickCapture={ (e) => {
					e.preventDefault()
					setIsRadioSelected(!isRadioSelected)
				} }
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
				<div className={ cn(styles.name) }>{ name }</div>
				<div className={ cn(styles.price) }>{ (price * count).toFixed(2) } <span>₽</span></div>
				<div className={ cn(styles.group) }>
					<div className={ cn(styles.count) }>
						<IconButton
							className={ cn(styles.icon) }
							iconOutline={ IoAddOutline }
							onClick={ (e) => {
								e.preventDefault()
								setCount(count + 1)
							} }
						/>
						<NumberField
							onClick={ (e) => e.preventDefault() }
							className={ cn(styles.field ) }
							value={ count }
							onChange={ (e) => {
								setCount(Number(e.currentTarget.value))
							} }
						/>
						<IconButton
							className={ cn(styles.icon) }
							iconOutline={ IoRemoveOutline }
							onClick={ (e) => {
								e.preventDefault()
								count > 1 && setCount(count - 1)
							} }
						/>
					</div>
					<div className={ cn(styles.actions) }>
						<IconButton
							selected={ isLikeSelected }
							className={ cn(styles.icon) }
							iconOutline={ IoHeartOutline }
							iconFilled={ IoHeart }
							selectedColor='error'
							onClick={ (e) => {
								e.preventDefault()
								setIsLikeSelected(!isLikeSelected)
							} }
						/>
						<IconButton
							className={ cn(styles.icon) }
							iconOutline={ IoCloseOutline }
							onClick={ (e) => {
								e.preventDefault()
							} }
						/>
					</div>
				</div>
			</div>
		</Link>
	)
}