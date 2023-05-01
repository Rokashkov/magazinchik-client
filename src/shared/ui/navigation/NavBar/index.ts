import { Container } from './Container'
import { Link } from './Link'

type NavBarType = typeof Container & {
	Link: typeof Link
}

const NavBar = Container as NavBarType
NavBar.Link = Link

export type { ContainerProps as NavBarProps } from './Container'
export default NavBar