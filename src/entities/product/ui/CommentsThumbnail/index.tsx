import styles from './.module.sass'
import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import { ComponentProps } from 'react'
import { IoChatbubbleOutline } from 'react-icons/io5'

interface CommentsThumbnailProps extends ComponentProps<'div'> {
	commentsCount: number
}

export const CommentsThumbnail = observer(({ commentsCount, className, ...otherProps }: CommentsThumbnailProps) => {

	return (
		<div
			className={ cn(styles.container, className) }
			{ ...otherProps }
		>
			<IoChatbubbleOutline className={ cn(styles.icon) }/>
			{ commentsCount }
		</div>
	)
})