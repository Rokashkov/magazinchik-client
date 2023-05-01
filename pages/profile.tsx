import axios from 'axios'
import { GetServerSideProps } from 'next'
import { ProfilePage } from 'pages/user/ProfilePage'

export default ProfilePage

export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		const cookie = context.req.headers.cookie
		const response = await axios.get(`${ process.env.NEXT_PUBLIC_API_URL }/auth/refresh`, { headers: { cookie } })
		context.res.setHeader('set-cookie', response.headers['set-cookie'] as string[])

		return {
			props: {}
		}
	} catch (error) {
		
		return {
			redirect: {
				destination: '/login',
				permanent: false
			}
		}
	}
}