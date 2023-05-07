import styles from './.module.sass'
import cn from 'classnames'
import { ProductShortcut } from 'entities/product'
import { ComponentProps } from 'react'
import { Product } from 'shared/api/types/Product'

interface ProductListProps extends ComponentProps<'div'> {
	products: Product[]
}

export const ProductList = ({ products, className, ...otherProps }: ProductListProps) => {
	
	return (
		<div
			className={ cn(styles.container, className) }
			{ ...otherProps }
		>
			<div className={ cn(styles.container) }>
				{ products.map(product => {
					const key = products.indexOf(product)

					return (
						<ProductShortcut
							key={ key }
							product={ product }
						/>
					)
				}) }
			</div>
		</div>
	)
}