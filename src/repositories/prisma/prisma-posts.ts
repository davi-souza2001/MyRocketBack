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
}