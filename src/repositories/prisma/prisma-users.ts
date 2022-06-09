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
        const user = await prisma.user.create({
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

        return user
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

    async searchByComum(data: string) {
        const users = await prisma.user.findMany({
            where: {
                OR: [
                    {
                        comumone: data
                    },
                    {
                        comumtwo: data
                    },
                    {
                        comumthree: data
                    },
                    {
                        nickname: data
                    }
                ]
            }
        })

        return users
    }

    async searchByNick(nickname: string): Promise<UserCreateData | null> {

        const user: UserCreateData | null = await prisma.user.findFirst({
            where: {
                nickname
            }
        })

        return user
    }

    async getUserByEmail(email: string) {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        return user
    }
}