import NavDrawer from 'shared/ui/navigation/NavDrawer'
import { IoHeartOutline, IoHeart } from 'react-icons/io5'

export const FavoritesNavDrawerLink = () => {
	
	return (
		<NavDrawer.Link
			iconOutline={ IoHeartOutline }
			iconFilled={ IoHeart }
			href='/favorites'
		>
			Любимое
		</NavDrawer.Link>
	)
}