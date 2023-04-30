import { observer } from 'mobx-react-lite'
import { Fragment, useEffect } from 'react'
import { userService } from 'shared/api/userService'
import { useFetch } from 'shared/lib/hooks/useFetch'
import { globalStore } from 'shared/model'

export const MainPage = observer(() => {

	const { data, fetch } = useFetch(
		() => userService.getAllUsers(),
		({ data }) => {
			console.log(data)
			globalStore.setSnackbarMessage('Юзеры успешно получены')
		},
		(error) => {
			console.log(error)
			globalStore.setSnackbarMessage('Чтобы получить список пользователей, нужно авторизоваться')
		}
	)

	useEffect(() => {
		fetch()
	}, [])
	
	return (
		<>
			<div>
				Добро пожаловать,
				{' '}
				{ globalStore.user.name ?? 'незнакомец' }
			</div>
			{ data && data.map((user) => {
				const { id, email, name } = user
				const index = data.indexOf(user)

				return (
					<Fragment key={ index }>
						<div>Id: { id }</div>
						<div>Имя: { name }</div>
						<div>Почта: { email }</div>
					</Fragment>
				)
			}) }
		</>
	)
})