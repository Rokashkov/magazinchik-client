import { AxiosError, AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'

type RequestHandler<D = any> = () => Promise<AxiosResponse<D>>
type ThenHandler<D = any> = (response: AxiosResponse<D>) => void
type CatchHandler<E = any> = (error: AxiosError<E>) => void
type FinallyHandler = () => void

interface UseFetchOptions<D = any, E = any> {
	requestHandler: RequestHandler<D>
	thenHandler?: ThenHandler<D>
	catchHandler?: CatchHandler<E>
	finallyHandler?: FinallyHandler
}

interface ErrorData {
	statusCode: number
	message: string
}

function useFetch<D = any, E = ErrorData> (handlers: UseFetchOptions<D, E>) {
	const { requestHandler, thenHandler, catchHandler, finallyHandler } = handlers

	const [isFetching, setIsFetching] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [data, setData] = useState<D>()
	const [error, setError] = useState<E | ErrorData>()

	const fetch = () => setIsFetching(true)

	useEffect(() => {
		if (isFetching && !isLoading) {
			setData(undefined)
			setError(undefined)
			setIsLoading(true)

			requestHandler()
				.then((response: AxiosResponse<D>) => {
					setData(response.data)
					thenHandler && thenHandler(response)
				})
				.catch((error: AxiosError<E>) => {
					setError({ statusCode: error.status, message: error.message })
					catchHandler && catchHandler(error)
				})
				.finally(() => {
					setIsLoading(false)
					setIsFetching(false)
					finallyHandler && finallyHandler()
				})
		}
	}, [isFetching])

	return { data, error, isLoading, fetch }
}

export type { RequestHandler, ThenHandler, CatchHandler, FinallyHandler, UseFetchOptions, ErrorData }
export { useFetch }