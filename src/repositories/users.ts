export interface UserCreateData{
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

export interface Users{
    create: (data: UserCreateData) => Promise<UserCreateData>
    login: (id: string) => Promise<UserCreateData | null>
    update: (id: string, date: UserCreateData) => Promise<void>
    getUserByEmail: (email: string) => Promise<UserCreateData | null>
    searchByComum: (comum: string) => Promise<UserCreateData[]>
    searchByNick: (nickname: string) => Promise<UserCreateData | null>
}