import { GetStaticProps } from 'next'
import { productService } from 'shared/api/sevices/productService'
import { Product } from 'shared/api/types/Product'
import { Page } from 'shared/ui/other/Page'
import { ProductList } from 'widgets/product/ProductList'
import cn from 'classnames'
import styles from './.module.sass'

interface MainPageProps {
	products: Product[]
}

export const MainPage = ({ products }: MainPageProps) => {

	return (
		<Page>
			{ products && products.length === 0  && 'Пока в Магазинчике нет товаров' }
			{ products && products.length > 0 && (
				<>
					<div className={ cn(styles.title) }>Все товары</div>
					<ProductList products={ products }/>
				</>
			) }
		</Page>
	)
}

export const  getStaticProps: GetStaticProps<MainPageProps> = async () => {
	const { data } = await productService.getAllProducts()

	return {
		props: { products: data }
	}
}