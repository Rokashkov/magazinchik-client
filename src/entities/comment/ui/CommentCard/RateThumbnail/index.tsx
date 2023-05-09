import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps } from 'react'
import { IoStar, IoStarOutline } from 'react-icons/io5'

interface RateThumbnailProps extends ComponentProps<'div'> {
	rate: number
}

export const RateThumbnail = ({ rate, className, ...otherProps }: RateThumbnailProps) => {
	const stars = [] as JSX.Element[]

	for (let i = 0; i < 5; i++) {
		if (i < rate) {
			stars.push((
				<IoStar
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
			{ ...stars }
		</div>
	)
}