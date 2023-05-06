import { userStore } from 'entities/user'
import { observer } from 'mobx-react-lite'
import { Page } from 'shared/ui/other/Page'

export const ProfilePage = observer(() => {
	
	return (
		<Page>Добро пожаловать, { userStore.name ?? 'незнакомец' }</Page>
	)
})