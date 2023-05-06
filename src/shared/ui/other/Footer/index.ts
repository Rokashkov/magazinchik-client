import { Container } from './Container'
type FooterType = typeof Container

const Footer = Container as FooterType

export type { ContainerProps as FooterProps } from './Container'
export default Footer