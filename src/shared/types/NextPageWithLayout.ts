import { NextPage } from 'next'
import { ILayoutProps } from './ILayoutProps'

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
	Layout?: (props: ILayoutProps) => JSX.Element
}