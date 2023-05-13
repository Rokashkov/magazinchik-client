import { api } from '..'
import { Comment } from '../types/Comment'

class CommentService {
	async getAllCommentsByProductId (productId: number) {
		const response = await api.get<Comment[]>(`/comment/product/${ productId }`)

		return response
	}
}

export const commentService = new CommentService