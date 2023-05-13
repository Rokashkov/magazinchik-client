import styles from './.module.sass'
import cn from 'classnames'
import { CommentCard } from 'entities/comment/ui/CommentCard'
import { ComponentProps } from 'react'
import { Comment } from 'shared/api/types/Comment'

interface CommentSectionProps extends ComponentProps<'div'> {
	comments: Comment[]
}

export const CommentSection = ({ comments, className, ...otherProps }: CommentSectionProps) => {
	
	return (
		<div
			className={ cn(styles.container, className) }
			{ ...otherProps }
		>
			<div className={ cn(styles.title) }>Отзывы о товаре<span>{ comments.length }</span></div>
			<div className={ cn(styles.group) }>
				{ comments.map(comment => {
					const key = comments.indexOf(comment)

					return (
						<CommentCard
							key={ key }
							comment={ comment }
						/>
					)
				})  }
			</div>
		</div>
	)
}