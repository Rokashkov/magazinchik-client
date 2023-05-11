import { mockProduct } from 'entities/product/store/mock'
import { Page } from 'shared/ui/other/Page'
import { CartProductList } from 'widgets/product/CartProductList'

export const CartPage = () => {
	
	return (
		<Page>
			<CartProductList
				cartProducts={ [
					{ product: mockProduct, productCount: 5 },
					{ product: mockProduct, productCount: 5 },
					{ product: mockProduct, productCount: 5 }
				] }
			/>
		</Page>
	)
}