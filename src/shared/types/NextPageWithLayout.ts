import { NextPage } from 'next'
import { LayoutProps } from 'shared/ui/other/Layout'

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
	Layout?: (props: LayoutProps) => JSX.Element
}