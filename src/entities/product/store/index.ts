import { makeAutoObservable } from 'mobx'

class ProductStore {
	photosLength: number = undefined
	displayedPhotoIndex = 0

	constructor () {
		makeAutoObservable(this)
	}

	setPhotosLength (photosLength: number) {
		this.photosLength = photosLength
	}
	
	setDisplayedPhotoIndex (index: number) {
		index = index % this.photosLength
		
		if (index >= 0) {
			this.displayedPhotoIndex = index
		} else {
			this.displayedPhotoIndex = this.photosLength + index
		}
	}
}

export const productStore = new ProductStore