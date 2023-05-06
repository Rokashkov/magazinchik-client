import Main, { MainProps } from 'shared/ui/other/Main'

export const DefaultMain = ({ children, ...otherProps }: MainProps) => {
	
	return (
		<Main { ...otherProps }>
			{ children }
		</Main>
	)
}