import { Container } from './Container'
type TopAppBarType = typeof Container

const TopAppBar = Container as TopAppBarType

export type { ContainerProps as TopAppBarProps } from './Container'
export default TopAppBar