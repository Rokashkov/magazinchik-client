import { Product } from 'shared/api/types/Product'

export const mockProduct: Product = {
	id: 1,
	slug: 'red_ball',
	name: 'Red Ball',
	commentsCount: 10,
	averageRating: 4.74,
	price: 4999.99,
	description: 'An awesome red ball for plying on the beach with best friends.',
	photos: ['1.jpg', '2.jpg']
}