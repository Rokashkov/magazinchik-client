import { Container } from './Container'
import { Link } from './Link'

type NavRailType = typeof Container & {
	Link: typeof Link
}

const NavRail = Container as NavRailType
NavRail.Link = Link

export type { ContainerProps as NavRailProps } from './Container'
export default NavRail