import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps } from 'react'
import { RatingThumbnail } from '../RatingThumbnail'
import { observer } from 'mobx-react-lite'
import { productStore } from 'entities/product/store'
import { CommentsThumbnail } from '../CommentsThumbnail'
import { FilledTextButton } from 'shared/ui/buttons/FilledTextButton'
import { PhotoSwitch } from './PhotoSwitch'
import { DisplayedPhoto } from './DisplayedPhoto'

type ProductCardProps = ComponentProps<'div'>

export const ProductCard = observer(({className, ...otherProps }: ProductCardProps) => {
	const { name, price, description, commentsCount, averageRating } = productStore

	return productStore.id && (
		<div
			className={ cn(styles.container, className) }
			{ ...otherProps }
		>
			<div className={ cn(styles.photos) }>
				<PhotoSwitch/>
				<DisplayedPhoto/>
			</div>
			<div className={ cn(styles.info) }>
				<div className={ cn(styles.group) }>
					<div className={ cn(styles.name) }>{ name }</div>
					<div className={ cn(styles.stats) }>
						<RatingThumbnail averageRating={ averageRating }/>
						<CommentsThumbnail commentsCount={ commentsCount }/>
					</div>
				</div>
				<div className={ cn(styles.group) }>
					<div className={ cn(styles.price) }>{ price } <span>₽</span></div>
					<FilledTextButton className={ cn(styles.button) }>Добавить в корзину</FilledTextButton>
				</div>
				<div className={ cn(styles.group) }>
					<div className={ cn(styles.title) }>Описание</div>
					<div className={ cn(styles.description) }>{ description }</div>
				</div>
			</div>
		</div>
	)
})