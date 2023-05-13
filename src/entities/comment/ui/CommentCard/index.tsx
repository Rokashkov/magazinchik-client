import styles from './.module.sass'
import cn from 'classnames'
import { ComponentProps } from 'react'
import { IoPersonCircleOutline } from 'react-icons/io5'
import { Comment } from 'shared/api/types/Comment'
import { RateThumbnail } from './RateThumbnail'
import moment from 'moment'
import 'moment/locale/ru'

interface CommentCardProps extends ComponentProps<'div'> {
	comment: Comment
}

export const CommentCard = ({ comment, className, ...otherProps }: CommentCardProps) => {
	const { userName, text, created } = comment
	console.log(comment)
	moment.locale('ru')

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
						{/* <RateThumbnail rate={ 0 }/> */}
						<div className={ cn(styles.date) }>{ moment(created).locale('rus').fromNow() }</div>
					</div>
				</div>
				<div className={ cn(styles.text) }>{ text }</div>
			</div>
		</div>
	)
}