import { prisma } from '../../prisma'
import { Posts, PostsCreateData } from '../posts'

export class PrismaPosts implements Posts {
    async create({
        avatar,
        content,
        email,
        likes = 0,
        tech,
        userName,
        userNick,
    }: PostsCreateData) {
        await prisma.post.create({
            data: {
                avatar,
                content,
                email,
                likes,
                tech,
                userName,
                userNick,
            }
        })
    }

    async getByComum(tech: string) {
        const posts = await prisma.post.findMany({
            where: {
                tech
            }
        })

        return posts
    }

    async getPostsMoreLike(tech: string) {
        const postsMoreLike = await prisma.post.findMany({
            where: {
                NOT: {
                    likes: 0
                },
                tech
            },
            orderBy: {
                likes: 'desc'
            },
            take: 3
        })

        return postsMoreLike
    }

    async giveLike(id: string, post: PostsCreateData, like: number) {
        const { avatar, content, email, likes, tech, userName, userNick } = post
        const likesExists = post.likes
        let average = 0

        console.log('like')
        console.log(like)
        console.log('likesExists')
        console.log(likesExists)

        average = (like + likesExists) / 2

        console.log('average')
        console.log(average)
        await prisma.post.update({
            where: {
                id
            },
            data: {
                avatar,
                content,
                email,
                likes: average,
                tech,
                userName,
                userNick
            }
        })

    }

    async delete(id: string) {
        await prisma.post.delete({
            where: {
                id
            }
        })
    }
}