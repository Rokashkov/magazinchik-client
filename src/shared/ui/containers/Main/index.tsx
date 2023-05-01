import { Container } from './Container'
type MainType = typeof Container

const Main = Container as MainType

export type { ContainerProps as MainProps } from './Container'
export default Main