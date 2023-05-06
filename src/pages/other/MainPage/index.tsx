import { productStore } from 'entities/product/store'
import { mockProduct } from 'entities/product/store/mock'
import { useEffect } from 'react'
import { Page } from 'shared/ui/other/Page'
import { ProductWidget } from 'widgets/product/ProductWidget'

export const MainPage = () => {
	useEffect(() => {
		productStore.setProduct(mockProduct)
	}, [])

	return (
		<Page>
			<ProductWidget/>
		</Page>
	)
}