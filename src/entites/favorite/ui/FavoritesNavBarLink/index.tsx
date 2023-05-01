import NavBar from 'shared/ui/navigation/NavBar'
import { IoHeartOutline, IoHeart } from 'react-icons/io5'

export const FavoritesNavBarLink = () => {
	
	return (
		<NavBar.Link
			iconOutline={ IoHeartOutline }
			iconFilled={ IoHeart }
			href='/favorites'
		>
			Любимое
		</NavBar.Link>
	)
}