import { api } from '../../shared/api'
import { useFetch } from '../../shared/lib/hooks/useFetch'
import styles from './Main.module.sass'
import cn from 'classnames'

export const MainPage = () => {

	const fetch1 = useFetch<{ message: string }>(() => {
		return api.get('/hello')
	}, (data) => {
		console.log(data)
	}, (error) => {
		console.log(error)
	})

	const fetch2 = useFetch<{ id: number, name: string }>(() => {
		return api.get('/user/1')
	}, (data) => {
		console.log(data)
	}, (error) => {
		console.log(error)
	})

	const fetch3 = useFetch<{ id: number, name: string }>(() => {
		return api.post('/user/update', { id: 123, name: 'John Doe' })
	}, (data) => {
		console.log(data)
	}, (error) => {
		console.log(error)
	})
	
	return (
		<div className={ cn(styles.container) }>
			<div className={ cn(styles.group) }>
				<h1>#1</h1>
				<p>
					Endpoint:
					{' '}
					<span>/api/hello</span>
				</p>
				<button
					onClick={ () => fetch1.fetch() }
					type='button'
				>
					Send request
				</button>
				{ fetch1.isLoading && <p className={ cn(styles.loading) }>Loading...</p> }
				{ fetch1.data && (
					<p className={ cn(styles.data) }>
						Message:
						{' '}
						{ fetch1.data.message }
					</p>
				) }
				{ fetch1.error && <p className={ cn(styles.error) }>Error</p> }
			</div>
			<div className={ cn(styles.group) }>
				<h1>#2</h1>
				<p>
					Endpoint:
					{' '}
					<span>/api/user/1</span>
				</p>
				<button
					onClick={ () => fetch2.fetch() }
					type='button'
				>
					Send request
				</button>
				{ fetch2.isLoading && <p className={ cn(styles.loading) }>Loading...</p> }
				{ fetch2.data && (
					<p className={ cn(styles.data) }>
						id:
						{' '}
						{ fetch2.data.id }
						<br/>
						name: 
						{' '}
						{ fetch2.data.name }
					</p>
				) }
				{ fetch2.error && <p className={ cn(styles.error) }>Error</p> }
			</div>
			<div className={ cn(styles.group) }>
				<h1>#3</h1>
				<p>
					Endpoint:
					{' '}
					<span>/api/user/update</span>
				</p>
				<button
					onClick={ () => fetch3.fetch() }
					type='button'
				>
					Send request
				</button>
				{ fetch3.isLoading && <p className={ cn(styles.loading) }>Loading...</p> }
				{ fetch3.data && (
					<p className={ cn(styles.data) }>
						id:
						{' '}
						{ fetch3.data.id }
						<br/>
						name: 
						{' '}
						{ fetch3.data.name }
					</p>
				) }
				{ fetch3.error && <p className={ cn(styles.error) }>Error</p> }
			</div>
		</div>
	)
}