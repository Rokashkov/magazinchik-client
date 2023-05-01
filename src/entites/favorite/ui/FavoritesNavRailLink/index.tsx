import { IoHeartOutline, IoHeart } from 'react-icons/io5'
import NavRail from 'shared/ui/navigation/NavRail'

export const FavoritesNavRailLink = () => {
	
	return (
		<NavRail.Link
			iconOutline={ IoHeartOutline }
			iconFilled={ IoHeart }
			href='/favorites'
		>
			Любимое
		</NavRail.Link>
	)
}