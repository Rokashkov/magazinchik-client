import styles from './.module.sass'
import cn from 'classnames'
import { productStore } from 'entities/product/store'
import { observer } from 'mobx-react-lite'
import { ComponentProps } from 'react'
import { IoStar, IoStarHalf, IoStarOutline } from 'react-icons/io5'

type RatingThumbnailProps = ComponentProps<'div'>

export const RatingThumbnail = observer(({ className, ...otherProps }: RatingThumbnailProps) => {
	const { averageRating } = productStore
	const stars = [] as JSX.Element[]

	for (let i = 0; i < 5; i++) {
		if (Math.floor(averageRating) >= i + 1) {
			stars.push((
				<IoStar
					key={ i }
					className={ cn(styles.icon) }
				/>
			))
		} else if (averageRating > i && Number(averageRating.toFixed(2).slice(-2)) >= 75) {
			stars.push((
				<IoStar
					key={ i }
					className={ cn(styles.icon) }
				/>
			))
		} else if (averageRating > i && Number(averageRating.toFixed(2).slice(-2)) >= 25) {
			stars.push((
				<IoStarHalf
					key={ i }
					className={ cn(styles.icon) }
				/>
			))
		} else {
			stars.push((
				<IoStarOutline
					key={ i }
					className={ cn(styles.icon) }
				/>
			))
		}
	}

	return (
		<div
			className={ cn(styles.container, className) }
			{ ...otherProps }
		>
			<div className={ cn(styles.group) }>{ ...stars }</div>
			{ averageRating }
		</div>
	)
})