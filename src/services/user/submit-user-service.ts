import { Users } from '../../repositories/users'
interface SubmitUserServiceRequest {
    name: string
    nickname: string
    email: string
    seniority: string
    area: string
    comumone: string
    comumtwo?: string
    comumthree?: string
    description: string
    linkedin?: string
    github: string
    youtube?: string
    instagram?: string
    avatar: string
    gas: number
}

export class SubmitUserService {
    constructor(
        private usersRepository: Users
    ) { }

    async executeCreate(request: SubmitUserServiceRequest) {
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
        } = request

        if (!name) {
            throw new Error('Name is required!')
        }

        if (!area) {
            throw new Error('Area is required!')
        }

        if (!comumone) {
            throw new Error('Choose a community!')
        }

        if (!description) {
            throw new Error('Description is required!')
        }

        if (!email) {
            throw new Error('Email is required!')
        }

        if (!github) {
            throw new Error('Github is required!')
        }

        if (!nickname) {
            throw new Error('Nickname is required!')
        }

        if (!seniority) {
            throw new Error('Seniority is required!')
        }

        const user = await this.usersRepository.create({
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

        return user
    }

    async executeLogin(id: string) {
        if (!id) {
            throw new Error('Email is required!')
        }

        const user = await this.usersRepository.login(id)

        return user
    }

    async executeUpdate(id: string, request: SubmitUserServiceRequest) {
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
        } = request

        if (!name) {
            throw new Error('Name is required!')
        }

        if (!area) {
            throw new Error('Area is required!')
        }

        if (!comumone) {
            throw new Error('Choose a community!')
        }

        if (!description) {
            throw new Error('Description is required!')
        }

        if (!email) {
            throw new Error('Email is required!')
        }

        if (!github) {
            throw new Error('Github is required!')
        }

        if (!nickname) {
            throw new Error('Nickname is required!')
        }

        if (!seniority) {
            throw new Error('Seniority is required!')
        }

        await this.usersRepository.update(
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
    }

    async executeSearchByComum(comum: string) {
        if (!comum) {
            throw new Error('Community is required!')
        }

        const users = await this.usersRepository.searchByComum(comum)

        return users
    }

    async executeSearchByNickname(nickname: string) {
        if (!nickname) {
            throw new Error('Nickname is required!')
        }

        const user = await this.usersRepository.searchByNick(nickname)

        return user
    }

    async executaGetUserByEmail(email: string) {
        if (!email) {
            throw new Error('Email is required!')
        }

        const user = await this.usersRepository.getUserByEmail(email)

        return user
    }
}