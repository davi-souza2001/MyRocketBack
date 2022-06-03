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
}