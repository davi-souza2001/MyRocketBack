import express from 'express'
import { PrismaPosts } from '../repositories/prisma/prisma-posts'
import { SubmitPostService } from '../services/post/submit-post-service'

export const routesPost = express.Router()

routesPost.post('/post/create', async (req, res) => {
    const {
        avatar,
        content,
        email,
        likes,
        tech,
        userName,
        userNick,
    } = req.body

    const prismaPosts = new PrismaPosts()

    const submitPostService = new SubmitPostService(prismaPosts)

    try {
        await submitPostService.executeCreate({
            avatar,
            content,
            email,
            likes,
            tech,
            userName,
            userNick,
        })

        return res.status(200).json({ message: 'Post created!' })
    } catch (error: any) {

        return res.status(401).json({ message: error.message })
    }
})