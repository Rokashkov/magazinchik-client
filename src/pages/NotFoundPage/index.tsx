import cn from 'classnames'
import styles from './.module.sass'
import Image from 'next/image'

export const NotFoundPage = () => {
	
	return (
		<div className={ cn(styles.container) }>
			<div className={ cn(styles.group) }>
				<div className={ cn(styles.headline) }>Ч</div>
				<Image
					className={ cn(styles.image) }
					src='/404.png'
					width={ 96 }
					height={ 96 }
					priority
					alt='404'
				/>
				<div className={ cn(styles.headline) }>Ч</div>
			</div>
			<div className={ cn(styles.message) }>Похоже, то, что вы искали, бесследно исчезло или вовсе не существвало...</div>
		</div>
	)
}