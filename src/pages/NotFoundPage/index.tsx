import { NextPageWithLayout } from 'shared/types/NextPageWithLayout'
import styles from './.module.sass'
import cn from 'classnames'
import { EmptyLayout } from 'layouts/EmptyLayout'
import { IoStorefrontOutline } from 'react-icons/io5'

const NotFoundPage: NextPageWithLayout = () => {
	
	return (
		<div className={ styles.container }>
			<div className={ cn(styles.group, styles.row) }>
				<IoStorefrontOutline className={ styles.logo }/>
				<div className={ cn(styles.status) }>404</div>
			</div>
			<div className={ cn(styles.group, styles.column) }>
				<div className={ cn(styles.message) }>Ничего не найдено</div>
				<a
					className={ cn(styles.link) }
					href='/'
				>
					На главную
				</a>
			</div>
		</div>
	)
}

NotFoundPage.Layout = EmptyLayout

export { NotFoundPage }