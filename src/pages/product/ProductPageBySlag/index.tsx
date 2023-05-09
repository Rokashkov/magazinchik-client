import { mockComment } from 'entities/comment/model/mock'
import { GetStaticPaths, GetStaticProps } from 'next'
import { productService } from 'shared/api/sevices/productService'
import { Product } from 'shared/api/types/Product'
import { Page } from 'shared/ui/other/Page'
import { CommentSection } from 'widgets/comment/CommentSection'
import { ProductWidget } from 'widgets/product/ProductWidget'

interface ProductPageProps {
	product: Product
}

export const ProductPage = ({ product }: ProductPageProps) => {
	
	return (
		<Page>
			<ProductWidget product={ product }/>
			<CommentSection comments={ mockComment }/>
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
	data.photos ?? (data.photos = [])

	return {
		props: { product: data }
	}
}

export default ProductPage