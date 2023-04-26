import { AxiosError, AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'

export function useFetch<T = any> (
	fetchCallback: () => Promise<AxiosResponse<T>>,
	thenCallback?: (response: AxiosResponse<T>) => void,
	catchCallback?: (error: AxiosError) => void
) {
	const [isFetching, setIsFetching] = useState(false)
	const [data, setData] = useState<T>()
	const [error, setError] = useState<AxiosError>()
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const fetch = () => {
		setIsFetching(true)
	}

	useEffect(() => {

		if (isFetching && !isLoading) {
			setData(undefined)
			setError(undefined)
			setIsLoading(true)
			fetchCallback()
				.then((response: AxiosResponse<T>) => {
					setData(undefined)
					setData(response.data)
					thenCallback && thenCallback(response)
				})
				.catch((error: AxiosError) => {
					setError(undefined)
					setError(error)
					catchCallback && catchCallback(error)
				})
				.finally(() => {
					setIsLoading(false)
					setIsFetching(false)
				})
		}
	}, [isFetching])

	return { data, error, isLoading, fetch }
}