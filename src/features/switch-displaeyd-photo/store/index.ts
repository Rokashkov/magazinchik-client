import { productStore } from 'entities/product/store'
import { makeAutoObservable } from 'mobx'

class SwitchDisplayedPhotoStore {
	index = 0

	constructor () {
		makeAutoObservable(this)
	}

	setIndex (index: number) {
		index = index % productStore.photos.length
		if (index >= 0) {
			this.index = index
		} else {
			this.index = productStore.photos.length + index
		}
	}
}

export const switchDisplayedPhotoStore = new SwitchDisplayedPhotoStore