import { NextPage } from 'next'
import { LayoutProps } from './LayoutProps'

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
	Layout?: (props: LayoutProps) => JSX.Element
}