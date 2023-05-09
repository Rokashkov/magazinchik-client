import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps } from 'react'
import { IoPersonCircleOutline } from 'react-icons/io5'
import { Comment } from 'shared/api/types/Comment'
import { RateThumbnail } from './RateThumbnail'

interface CommentCardProps extends ComponentProps<'div'> {
	comment: Comment
}

export const CommentCard = ({ comment, className, ...otherProps }: CommentCardProps) => {
	const { userName, text, rate } = comment

	return (
		<div
			className={ cn(styles.container, className) }
			{ ...otherProps }
		>
			<IoPersonCircleOutline className={ cn(styles.avatar) }/>
			<div className={ cn(styles.group) }>
				<div className={ cn(styles.head) }>
					<div className={ cn(styles.author) }>{ userName }</div>
					<div className={ cn(styles.stats) }>
						<RateThumbnail rate={ rate }/>
						<div className={ cn(styles.date) }>8 мая 2023</div>
					</div>
				</div>
				<div className={ cn(styles.text) }>{ text }</div>
			</div>
		</div>
	)
}