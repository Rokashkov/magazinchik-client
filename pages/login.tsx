import axios from 'axios'
import { GetServerSideProps } from 'next'
import { LoginPage } from 'pages/auth/LoginPage'

export default LoginPage

export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		const cookie = context.req.headers.cookie
		const response = await axios.get(`${ process.env.NEXT_PUBLIC_API_URL }/auth/refresh`, { headers: { cookie } })
		context.res.setHeader('set-cookie', response.headers['set-cookie'] as string[])

		return {
			redirect: {
				destination: '/profile',
				permanent: false
			}
		}
	} catch (error) {
		
		return {
			props: {}
		}
	}
}