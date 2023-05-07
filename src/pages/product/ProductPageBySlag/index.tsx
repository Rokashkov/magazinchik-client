import { productStore } from 'entities/product/store'
import { GetStaticPaths, GetStaticProps } from 'next'
import { productService } from 'shared/api/sevices/productService'
import { Product } from 'shared/api/types/Product'
import { Page } from 'shared/ui/other/Page'
import { ProductWidget } from 'widgets/product/ProductWidget'

interface ProductPageProps {
	product: Product
}

export const ProductPage = ({ product }: ProductPageProps) => {
	productStore.setProduct(product)
	
	return (
		<Page>
			<ProductWidget/>
		</Page>
	)
}

export const  getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
	const { data } = await productService.getAllProducts()
	const paths = [] as { params: { slug: string } }[]

	for (const product of data) {
		const { slug } = product
		paths.push({ params: { slug } })
	}

	return {
		paths,
		fallback: false
	}
}

export const  getStaticProps: GetStaticProps<ProductPageProps, { slug: string }> = async (context) => {
	const { slug } = context.params
	const { data } = await productService.getProductBySlag(slug)

	return {
		props: { product: data }
	}
}

export default ProductPage