import { userStore } from 'entites/user/model'
import { observer } from 'mobx-react-lite'

export const ProfilePage = observer(() => {
	
	return (
		<div>Добро пожаловать, { userStore.user.name ?? 'незнакомец' }</div>
	)
})