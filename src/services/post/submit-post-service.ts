import { Posts } from '../../repositories/posts'
interface SubmitPostServiceRequest {
    content: string
    userName: string
    userNick: string
    email: string
    tech: string
    avatar: string
    likes: object
}

export class SubmitPostService {
    constructor(
        private postRepository: Posts
    ) { }

    async executeCreate(request: SubmitPostServiceRequest) {
        const {
            avatar,
            content,
            email,
            likes,
            tech,
            userName,
            userNick,
        } = request

        if (!avatar) {
            throw new Error('Yout avatar is required!')
        }

        if (!content) {
            throw new Error('Content is required!')
        }

        if (!email) {
            throw new Error('Email is required!')
        }

        if (!tech) {
            throw new Error('Tech is required!')
        }

        if (!userName) {
            throw new Error('User name is required!')
        }

        if (!userNick) {
            throw new Error('User nick is required!')
        }

        await this.postRepository.create({
            avatar,
            content,
            email,
            likes,
            tech,
            userName,
            userNick,
        })
    }

    async executeGetByComum(tech: string) {
        if (!tech) {
            throw new Error('Tech is required!')
        }

        const posts = await this.postRepository.getByComum(tech)

        return posts
    }

    async executeGetPostsMoreLike(tech: string) {
        if (!tech) {
            throw new Error('Tech is required!')
        }

        const posts = await this.postRepository.getPostsMoreLike(tech)

        return posts
    }

    async executeDelete(id: string) {
        if (!id) {
            throw new Error('Id is required!')
        }

        await this.postRepository.delete(id)
    }
}