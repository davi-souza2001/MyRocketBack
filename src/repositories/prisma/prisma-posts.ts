import { prisma } from '../../prisma'
import { Posts, PostsCreateData } from '../posts'

export class PrismaPosts implements Posts {
    async create({
        avatar,
        content,
        email,
        likes = {},
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
                    likes: {}
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
}