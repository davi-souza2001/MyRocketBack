export interface PostsCreateData {
  content: string
  userName: string
  userNick: string
  email: string
  tech: string
  avatar: string
  likes: object
}

export interface Posts{
    create: (data: PostsCreateData) => Promise<void>
}