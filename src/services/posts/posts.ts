import { Post } from '@/entities'
import { ModelApiService } from '../api'

class PostsService extends ModelApiService<Post> {
  constructor() {
    super('posts')
  }
}

export const posts = new PostsService()
