import { makeAutoObservable } from 'mobx'
import { Product } from 'shared/api/types/Product'

class ProductStore implements Product {
	id = 0
	slug = 'string'
	name = 'string'
	commentsCount = 0
	averageRating = 0
	price = 0
	description = 'string'
	photos = ['string']
	displayedPhotoIndex = 0

	constructor () {
		makeAutoObservable(this)
	}

	setProduct (product: Product) {
		const { id, slug, name, commentsCount, averageRating, price, description, photos } = product
		this.id = id
		this.slug = slug
		this.name = name
		this.commentsCount = commentsCount
		this.averageRating = averageRating
		this.price = price
		this.description = description
		this.photos = photos ?? []
	}
	setDisplayedPhotoIndex (index: number) {
		index = index % this.photos.length
		
		if (index >= 0) {
			this.displayedPhotoIndex = index
		} else {
			this.displayedPhotoIndex = this.photos.length + index
		}
	}
}

export const productStore = new ProductStore