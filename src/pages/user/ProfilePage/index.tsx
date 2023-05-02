import { userStore } from 'entites/user/model'
import { observer } from 'mobx-react-lite'
import { Page } from 'shared/ui/containers/Page'

export const ProfilePage = observer(() => {
	
	return (
		<Page>Добро пожаловать, { userStore.user.name ?? 'незнакомец' }</Page>
	)
})