import Main, { MainProps } from 'shared/ui/containers/Main'

export const DefaultMain = ({ children, ...otherProps }: MainProps) => {
	
	return (
		<Main { ...otherProps }>{ children }</Main>
	)
}