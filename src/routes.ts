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
        
        return res.status(401).json({ message: error.message });
    }
})