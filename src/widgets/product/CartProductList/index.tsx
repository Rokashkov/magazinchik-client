import styles from './.module.sass'
import cn from 'classnames'
import { CartProductShortcut } from 'entities/product/ui/CartProductShortcut'
import { ComponentProps } from 'react'
import { Product } from 'shared/api/types/Product'

interface CartProductListProps extends ComponentProps<'div'> {
	cartProducts: {
		product: Product
		productCount: number
	}[]
}

export const CartProductList = ({ cartProducts, className, ...otherProps }: CartProductListProps) => {

	return (
		<div
			className={ cn(styles.list, className) }
			{ ...otherProps }
		>
			{ cartProducts.map(cartProduct => {
				const { product, productCount } = cartProduct
				const key = cartProducts.indexOf(cartProduct)

				return (
					<CartProductShortcut
						key={ key }
						product={ product }
						productCount={ productCount }
					/>
				)
			}) }
		</div>
	)
}