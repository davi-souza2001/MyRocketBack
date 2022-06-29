export interface PostsCreateData {
  content: string
  userName: string
  userNick: string
  email: string
  tech: string
  avatar: string
  likes: number
}

export interface Posts {
  create: (data: PostsCreateData) => Promise<void>
  getByComum: (tech: string) => Promise<Array<any> | null>
  giveLike: (id: string, post: PostsCreateData, like: number) => Promise<any>
  getPostsMoreLike: (tech: string) => Promise<Array<any> | null>
  delete: (id: string) => Promise<void>
}