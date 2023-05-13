import { mockProduct } from 'entities/product/store/mock'
import { productService } from 'shared/api/sevices/productService'
import { useFetch } from 'shared/lib/hooks/useFetch'
import { Page } from 'shared/ui/other/Page'
import { CartProductList } from 'widgets/product/CartProductList'

export const CartPage = () => {
	const { data } = useFetch(() => productService.getAllProducts())
	
	return (
		<Page>
			Страница корзины
		</Page>
	)
}