import express from 'express'
import { PrismaPosts } from '../repositories/prisma/prisma-posts'
import { SubmitPostService } from '../services/post/submit-post-service'
import { prisma } from '../prisma'
import { UserCreateData } from '../repositories/users'

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

    let newUser: UserCreateData = {
        area: '',
        avatar: '',
        comumone: '',
        description: '',
        email: '',
        gas: 0,
        github: '',
        nickname: '',
        seniority: '',
        name: ''
    }

    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })


    if (user && user.gas !== 0) {
        newUser = {
            area: user.area,
            avatar: user.avatar,
            comumone: user.comumone,
            comumtwo: user.comumtwo,
            comumthree: user.comumthree,
            description: user.description,
            email: user.email,
            github: user.github,
            instagram: user.instagram,
            linkedin: user.linkedin,
            name: user.name,
            nickname: user.nickname,
            seniority: user.seniority,
            youtube: user.youtube,
            gas: user.gas,
        }

        newUser.gas = newUser.gas === 0 ? 0 : newUser.gas - 1

        await prisma.user.update({
            where: {
                email
            },
            data: newUser
        })
    }

    if (user && user.gas !== 0) {
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
    } else {
        return res.status(401).json({ message: 'User without gas!' })
    }
})

routesPost.post('/post/getByComum', async (req, res) => {
    const { tech } = req.body

    const prismaPosts = new PrismaPosts()

    const submitPostService = new SubmitPostService(prismaPosts)

    try {
        const posts = await submitPostService.executeGetByComum(tech)

        return res.status(200).json(posts)
    } catch (error: any) {

        return res.status(401).json({ message: error.message })
    }
})

routesPost.post('/post/getPostsMoreLike', async (req, res) => {
    const { tech } = req.body

    const prismaPosts = new PrismaPosts()

    const submitPostService = new SubmitPostService(prismaPosts)

    try {
        const postsMoreLikes = await submitPostService.executeGetPostsMoreLike(tech)

        return res.status(200).json(postsMoreLikes)
    } catch (error: any) {

        return res.status(401).json({ message: error.message })
    }
})

routesPost.post('/post/giveLike', async (req, res) => {
    const {
        id,
        like,
        avatar,
        content,
        email,
        tech,
        userName,
        userNick,
        likes,
    } = req.body

    const prismaPosts = new PrismaPosts()

    const submitPostService = new SubmitPostService(prismaPosts)

    try {
        await submitPostService.executeGiveLike(
            id,
            {
                avatar,
                content,
                email,
                tech,
                userName,
                userNick,
                likes
            },
            like
        )

        return res.status(200).json({ message: 'Like gived!' })
    } catch (error: any) {

        return res.status(401).json({ message: error.message })
    }
})

routesPost.post('/post/delete', async (req, res) => {
    const { id } = req.body

    const prismaPosts = new PrismaPosts()

    const submitPostService = new SubmitPostService(prismaPosts)

    try {
        await submitPostService.executeDelete(id)

        return res.status(200).json({ message: 'Post Deleted!' })
    } catch (error: any) {

        return res.status(401).json({ message: error.message })
    }
})