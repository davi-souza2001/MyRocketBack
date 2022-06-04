import express from 'express'
import { PrismaUsers } from './repositories/prisma/prisma-users'
import { SubmitUserService } from './services/user/submit-user-service'

export const routes = express.Router()

routes.post('/user/create', async (req, res) => {
    const {
        area,
        avatar,
        comumone,
        description,
        email,
        gas,
        github,
        name,
        nickname,
        seniority,
        comumthree,
        comumtwo,
        instagram,
        linkedin,
        youtube
    } = req.body

    const prismaUsers = new PrismaUsers()

    const submitUserService = new SubmitUserService(prismaUsers)

    try {
        await submitUserService.executeCreate({
            area,
            avatar,
            comumone,
            description,
            email,
            gas,
            github,
            name,
            nickname,
            seniority,
            comumthree,
            comumtwo,
            instagram,
            linkedin,
            youtube
        })

        return res.status(200).json({ message: 'User created!' })
    } catch (error: any) {

        return res.status(401).json({ message: error.message })
    }
})

routes.post('/user/login', async (req, res) => {
    const { id } = req.body

    const prismaUsers = new PrismaUsers()

    const submitUserService = new SubmitUserService(prismaUsers)

    try {
        const user = await submitUserService.executeLogin(id)

        return res.status(200).json(user)
    } catch (error: any) {

        return res.status(401).json({ message: error.message })
    }
})

routes.post('/user/update', async (req, res) => {
    const { id } = req.body
    const {
        area,
        avatar,
        comumone,
        description,
        email,
        gas,
        github,
        name,
        nickname,
        seniority,
        comumthree,
        comumtwo,
        instagram,
        linkedin,
        youtube
    } = req.body

    const prismaUsers = new PrismaUsers()

    const submitUserService = new SubmitUserService(prismaUsers)

    try {
        await submitUserService.executeUpdate(
            id,
            {
                area,
                avatar,
                comumone,
                description,
                email,
                gas,
                github,
                name,
                nickname,
                seniority,
                comumthree,
                comumtwo,
                instagram,
                linkedin,
                youtube
            })

        return res.status(200).json({ message: 'User edited!' })
    } catch (error: any) {

        return res.status(401).json({ message: error.message })
    }
})

routes.post('/user/searchbycomum', async (req, res) => {
    const { comum } = req.body

    const prismaUsers = new PrismaUsers()

    const submitUserService = new SubmitUserService(prismaUsers)

    try {
        const users = await submitUserService.executeSearchByComum(comum)

        return res.status(200).json(users)
    } catch (error: any) {

        return res.status(401).json({ message: error.message })
    }
})

routes.post('/user/searchbynick', async (req, res) => {
    const { nickname } = req.body

    const prismaUsers = new PrismaUsers()

    const submitUserService = new SubmitUserService(prismaUsers)

    try {
        const user = await submitUserService.executeSearchByNickname(nickname)

        return res.status(200).json(user)
        
    } catch (error: any) {

        return res.status(401).json({ message: error.message })
    }
})