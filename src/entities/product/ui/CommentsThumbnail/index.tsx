import { productStore } from 'entities/product/store'
import styles from './.module.sass'
import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import { ComponentProps } from 'react'
import { IoChatbubbleOutline } from 'react-icons/io5'

type CommentsThumbnailProps = ComponentProps<'div'>

export const CommentsThumbnail = observer(({ className, ...otherProps }: CommentsThumbnailProps) => {
	const { commentsCount } = productStore

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