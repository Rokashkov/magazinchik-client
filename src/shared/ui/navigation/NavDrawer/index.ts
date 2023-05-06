import { Action } from './Action'
import { Container } from './Container'
import { Headline } from './Headline'
import { Link } from './Link'

export type NavDrawerType = typeof Container & {
	Link: typeof Link
	Action: typeof Action
	Headline: typeof Headline
}

const NavDrawer = Container as NavDrawerType
NavDrawer.Action = Action
NavDrawer.Link = Link
NavDrawer.Headline = Headline

export type { ContainerProps as NavDrawerProps } from './Container'
export default NavDrawer