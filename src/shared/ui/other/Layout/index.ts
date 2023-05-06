import { Container } from './Container'
type LayoutType = typeof Container

const Layout = Container as LayoutType

export type { ContainerProps as LayoutProps } from './Container'
export default Layout