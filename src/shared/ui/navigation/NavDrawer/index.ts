import { Action } from './Action'
import { Additional } from './Additional'
import { Basic } from './Basic'
import { Container } from './Container'
import { Headline } from './Headline'
import { Link } from './Link'

export type NavDrawerType = typeof Container & {
	Link: typeof Link
	Action: typeof Action
	Headline: typeof Headline
	Basic: typeof Basic
	Additional: typeof Additional
}

const NavDrawer = Container as NavDrawerType
NavDrawer.Action = Action
NavDrawer.Link = Link
NavDrawer.Headline = Headline
NavDrawer.Basic = Basic
NavDrawer.Additional = Additional

export type { ContainerProps as NavDrawerProps } from './Container'
export default NavDrawer