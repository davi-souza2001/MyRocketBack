import { PrismaUsers } from '../repositories/prisma/prisma-users';
import { SubmitUserService } from '../services/user/submit-user-service';

const createFeedbackSpy = jest.fn();
const createLoginSpy = jest.fn();

const submitUser = new SubmitUserService(
    {
        create: createFeedbackSpy,
        login: createLoginSpy
    }
)

describe('Tests for user submit user', () => {

    it('Should be able to submit a user', async () => {

        await expect(submitUser.executeCreate({
            area: 'Front',
            avatar: 'tsete.com',
            comumone: 'Front-end',
            description: 'Sou dev',
            email: '123@teste.com',
            gas: 15,
            github: 'alo@github.com',
            name: 'Davi Souza',
            nickname: 'davisouza2001',
            seniority: 'Junior',
            comumthree: 'Angular',
            comumtwo: 'RN',
            instagram: 'generic',
            linkedin: 'generic',
            youtube: 'generic'
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
    })

    it('Should not be able to submit a user without name', async () => {

        await expect(submitUser.executeCreate({
            area: 'Front',
            avatar: 'tsete.com',
            comumone: 'Front-end',
            description: 'Sou dev',
            email: '123@teste.com',
            gas: 15,
            github: 'alo@github.com',
            name: '',
            nickname: 'davisouza2001',
            seniority: 'Junior',
            comumthree: 'Angular',
            comumtwo: 'RN',
            instagram: 'generic',
            linkedin: 'generic',
            youtube: 'generic'
        })).rejects.toThrow();
    })

    it('Should not be able to submit a user without area', async () => {

        await expect(submitUser.executeCreate({
            area: '',
            avatar: 'tsete.com',
            comumone: 'Front-end',
            description: 'Sou dev',
            email: '123@teste.com',
            gas: 15,
            github: 'alo@github.com',
            name: 'Davi',
            nickname: 'davisouza2001',
            seniority: 'Junior',
            comumthree: 'Angular',
            comumtwo: 'RN',
            instagram: 'generic',
            linkedin: 'generic',
            youtube: 'generic'
        })).rejects.toThrow();
    })

    it('Should not be able to submit a user without a one community', async () => {

        await expect(submitUser.executeCreate({
            area: 'Front',
            avatar: 'tsete.com',
            comumone: '',
            description: 'Sou dev',
            email: '123@teste.com',
            gas: 15,
            github: 'alo@github.com',
            name: 'Davi',
            nickname: 'davisouza2001',
            seniority: 'Junior',
            comumthree: 'Angular',
            comumtwo: 'RN',
            instagram: 'generic',
            linkedin: 'generic',
            youtube: 'generic'
        })).rejects.toThrow();
    })

    it('Should not be able to submit a user without a one description', async () => {

        await expect(submitUser.executeCreate({
            area: 'Front',
            avatar: 'tsete.com',
            comumone: 'React',
            description: '',
            email: '123@teste.com',
            gas: 15,
            github: 'alo@github.com',
            name: 'Davi',
            nickname: 'davisouza2001',
            seniority: 'Junior',
            comumthree: 'Angular',
            comumtwo: 'RN',
            instagram: 'generic',
            linkedin: 'generic',
            youtube: 'generic'
        })).rejects.toThrow();
    })

    it('Should not be able to submit a user without email', async () => {

        await expect(submitUser.executeCreate({
            area: 'Front',
            avatar: 'tsete.com',
            comumone: 'React',
            description: 'Alo',
            email: '',
            gas: 15,
            github: 'alo@github.com',
            name: 'Davi',
            nickname: 'davisouza2001',
            seniority: 'Junior',
            comumthree: 'Angular',
            comumtwo: 'RN',
            instagram: 'generic',
            linkedin: 'generic',
            youtube: 'generic'
        })).rejects.toThrow();
    })

    it('Should not be able to submit a user without github', async () => {

        await expect(submitUser.executeCreate({
            area: 'Front',
            avatar: 'tsete.com',
            comumone: 'React',
            description: 'Alo',
            email: 'alo@gmai.com',
            gas: 15,
            github: '',
            name: 'Davi',
            nickname: 'davisouza2001',
            seniority: 'Junior',
            comumthree: 'Angular',
            comumtwo: 'RN',
            instagram: 'generic',
            linkedin: 'generic',
            youtube: 'generic'
        })).rejects.toThrow();
    })

    it('Should not be able to submit a user without nickname', async () => {

        await expect(submitUser.executeCreate({
            area: 'Front',
            avatar: 'tsete.com',
            comumone: 'React',
            description: 'Alo',
            email: 'alo@gmai.com',
            gas: 15,
            github: 'alogithub',
            name: 'Davi',
            nickname: '',
            seniority: 'Junior',
            comumthree: 'Angular',
            comumtwo: 'RN',
            instagram: 'generic',
            linkedin: 'generic',
            youtube: 'generic'
        })).rejects.toThrow();
    })

    it('Should not be able to submit a user without seniority', async () => {

        await expect(submitUser.executeCreate({
            area: 'Front',
            avatar: 'tsete.com',
            comumone: 'React',
            description: 'Alo',
            email: 'alo@gmai.com',
            gas: 15,
            github: 'alogithub',
            name: 'Davi',
            nickname: 'alotest',
            seniority: '',
            comumthree: 'Angular',
            comumtwo: 'RN',
            instagram: 'generic',
            linkedin: 'generic',
            youtube: 'generic'
        })).rejects.toThrow();
    })
})

describe('Tests for user login', () => {
    it('Should be able to submit a user login', async () => {

        await expect(submitUser.executeLogin('123')).resolves.not.toThrow();

        expect(createLoginSpy).toHaveBeenCalled();
    })

    it('Should not be able to submit a user login without email', async () => {

        await expect(submitUser.executeLogin('')).rejects.toThrow();
    })
})