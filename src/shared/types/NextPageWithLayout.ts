import { NextPage } from 'next'
import { LayoutProps } from 'shared/ui/containers/Layout'

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
	Layout?: (props: LayoutProps) => JSX.Element
}