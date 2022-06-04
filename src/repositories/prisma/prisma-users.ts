import { prisma } from '../../prisma'
import { UserCreateData, Users } from '../users'

export class PrismaUsers implements Users {
    async create({
        name,
        area,
        avatar = '',
        comumone,
        description,
        email,
        gas = 15,
        github,
        nickname,
        seniority,
        comumthree = '',
        comumtwo = '',
        instagram = '',
        linkedin = '',
        youtube = '',
    }: UserCreateData) {
        await prisma.user.create({
            data: {
                name,
                area,
                avatar,
                comumone,
                description,
                email,
                gas,
                github,
                nickname,
                seniority,
                comumthree,
                comumtwo,
                instagram,
                linkedin,
                youtube,
            }
        })
    }

    async login(id: string) {
        const user = await prisma.user.findFirst({
            where: {
                id
            }
        })

        return user
    }

    async update(id: string,
        {
            name,
            area,
            avatar = '',
            comumone,
            description,
            email,
            gas,
            github,
            nickname,
            seniority,
            comumthree = '',
            comumtwo = '',
            instagram = '',
            linkedin = '',
            youtube = '',
        }: UserCreateData
    ) {
        await prisma.user.update({
            where: {
                id
            },
            data: {
                name,
                area,
                avatar,
                comumone,
                description,
                email,
                gas,
                github,
                nickname,
                seniority,
                comumthree,
                comumtwo,
                instagram,
                linkedin,
                youtube,
            }
        })

    }

    async searchByComum(comum: string) {
        const users = await prisma.user.findMany({
            where: {
                OR: [
                    {
                        comumone: comum
                    },
                    {
                        comumtwo: comum
                    },
                    {
                        comumthree: comum
                    }
                ]
            }
        })

        return users
    }
}