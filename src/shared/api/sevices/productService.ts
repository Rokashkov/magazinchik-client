import { api } from '..'
import { Product } from '../types/Product'

class ProductService {
	async getAllProducts () {
		const response = await api.get<Product[]>('/product')

		return response
	}

	async getProductBySlag (slug: string) {
		const response = await api.get<Product>(`/product/slug/${ slug }`)

		return response
	}
}

export const productService = new ProductService