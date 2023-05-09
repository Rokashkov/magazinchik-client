import { ProductCard } from 'entities/product'
import { Product } from 'shared/api/types/Product'

interface ProductWidgetProps {
	product: Product
}

export const ProductWidget = ({ product }: ProductWidgetProps) => {
	
	return (
		<ProductCard product={ product }/>
	)
}