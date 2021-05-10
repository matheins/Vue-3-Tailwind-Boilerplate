import { Post } from './post.types'

export const mockPosts = (): Post[] => [
  {
    id: 1,
    title: 'title',
    body: 'body',
    createdAt: '2019-12-19T11:54:04 +05:00',
  },
  {
    id: 2,
    title: 'title2',
    body: 'body2',
    createdAt: '2019-12-07T11:54:04 +05:00',
  },
]
