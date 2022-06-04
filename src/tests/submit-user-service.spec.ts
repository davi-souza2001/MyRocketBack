import { SubmitUserService } from '../services/user/submit-user-service';

const createFeedbackSpy = jest.fn();
const createLoginSpy = jest.fn();
const createUpdateSpy = jest.fn();
const createSearchComumSpy = jest.fn();

const submitUser = new SubmitUserService(
    {
        create: createFeedbackSpy,
        login: createLoginSpy,
        update: createUpdateSpy,
        searchByComum: createSearchComumSpy
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

    it('Should not be able to submit a user login without id', async () => {

        await expect(submitUser.executeLogin('')).rejects.toThrow();
    })
})

describe('Tests for user submit update', () => {
    it('Should be able to submit a user update', async () => {

        await expect(submitUser.executeUpdate(
            '123',
            {
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

        expect(createUpdateSpy).toHaveBeenCalled();
    })

    it('Should not be able to update a user without name', async () => {

        await expect(submitUser.executeUpdate(
            '123',
            {
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

    it('Should not be able to update a user without area', async () => {

        await expect(submitUser.executeUpdate(
            '123',
            {
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

    it('Should not be able to update a user without a one community', async () => {

        await expect(submitUser.executeUpdate(
            '123',
            {
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

    it('Should not be able to update a user without a one description', async () => {

        await expect(submitUser.executeUpdate(
            '123',
            {
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

    it('Should not be able to update a user without email', async () => {

        await expect(submitUser.executeUpdate(
            '123',
            {
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

    it('Should not be able to update a user without github', async () => {

        await expect(submitUser.executeUpdate(
            '123',
            {
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

    it('Should not be able to update a user without nickname', async () => {

        await expect(submitUser.executeUpdate(
            '123',
            {
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

    it('Should not be able to update a user without seniority', async () => {

        await expect(submitUser.executeUpdate(
            '123',
            {
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

describe('Tests to search for user', () => {
    it('Should be able to search a user', async () => {

        await expect(submitUser.executeSearchByComum('react')).resolves.not.toThrow();

        expect(createSearchComumSpy).toHaveBeenCalled();
    })

    it('Should not be able to search a user without community', async () => {

        await expect(submitUser.executeSearchByComum('')).rejects.toThrow();
    })
})