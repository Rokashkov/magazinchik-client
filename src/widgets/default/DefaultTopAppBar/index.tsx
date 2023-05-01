import TopAppBar, { TopAppBarProps } from 'shared/ui/navigation/TopAppBar'

export const DefaultTopAppBar = ({ ...otherProps }: TopAppBarProps) => {
	
	return (
		<TopAppBar { ...otherProps }/>
	)
}