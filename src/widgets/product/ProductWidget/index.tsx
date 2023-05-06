import { ProductCard } from 'entities/product'
import { PhotoSwitch } from 'features/switch-displaeyd-photo'
import { DisplayedPhoto } from 'features/switch-displaeyd-photo/ui/DisplayedPhoto'

export const ProductWidget = () => {
	
	return (
		<ProductCard
			displayedPhoto={ DisplayedPhoto }
			photoSwitch={ PhotoSwitch }
		/>
	)
}