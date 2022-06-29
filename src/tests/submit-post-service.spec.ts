import { SubmitPostService } from '../services/post/submit-post-service';

const createPostSpy = jest.fn();
const getByComumPostSpy = jest.fn();
const getPostsMoreLikeSpy = jest.fn();
const getGiveLikeSpy = jest.fn();
const deletePostSpy = jest.fn();

const submitPost = new SubmitPostService(
    {
        create: createPostSpy,
        getByComum: getByComumPostSpy,
        getPostsMoreLike: getPostsMoreLikeSpy,
        giveLike: getGiveLikeSpy,
        delete: deletePostSpy,
    }
)

describe('Tests for submit a new post', () => {

    it('Should be able to submit a post', async () => {

        await expect(submitPost.executeCreate({
            avatar: 'example',
            content: 'example',
            email: 'example@gmail',
            likes: 1,
            tech: 'example',
            userName: 'example',
            userNick: 'example',
        })).resolves.not.toThrow();

        expect(createPostSpy).toHaveBeenCalled();
    })

    it('Should not be able to submit a post without area', async () => {

        await expect(submitPost.executeCreate({
            avatar: '',
            content: 'example',
            email: 'example@gmail',
            likes: 1,
            tech: 'example',
            userName: 'example',
            userNick: 'example',
        })).rejects.toThrow();
    })

    it('Should not be able to submit a post without content', async () => {

        await expect(submitPost.executeCreate({
            avatar: 'example',
            content: '',
            email: 'example@gmail',
            likes: 1,
            tech: 'example',
            userName: 'example',
            userNick: 'example',
        })).rejects.toThrow();
    })

    it('Should not be able to submit a post without email', async () => {

        await expect(submitPost.executeCreate({
            avatar: 'example',
            content: 'example',
            email: '',
            likes: 1,
            tech: 'example',
            userName: 'example',
            userNick: 'example',
        })).rejects.toThrow();
    })

    it('Should not be able to submit a post without tech', async () => {

        await expect(submitPost.executeCreate({
            avatar: 'example',
            content: 'example',
            email: 'example@gmail',
            likes: 1,
            tech: '',
            userName: 'example',
            userNick: 'example',
        })).rejects.toThrow();
    })

    it('Should not be able to submit a post without userName', async () => {

        await expect(submitPost.executeCreate({
            avatar: 'example',
            content: 'example',
            email: 'example@gmail',
            likes: 1,
            tech: 'example',
            userName: '',
            userNick: 'example',
        })).rejects.toThrow();
    })

    it('Should not be able to submit a post without userNick', async () => {

        await expect(submitPost.executeCreate({
            avatar: 'example',
            content: 'example',
            email: 'example@gmail',
            likes: 1,
            tech: 'example',
            userName: 'example',
            userNick: '',
        })).rejects.toThrow();
    })
})

describe('Tests for get a posts by community', () => {
    it('Should be able to get posts', async () => {

        await expect(submitPost.executeGetByComum('example'))
            .resolves.not.toThrow();

        expect(getByComumPostSpy).toHaveBeenCalled();
    })

    it('Should not be able to get posts without tech', async () => {

        await expect(submitPost.executeGetByComum(''))
            .rejects.toThrow();
    })
})

describe('Tests for get posts more like', () => {
    it('Should be able to get posts', async () => {

        await expect(submitPost.executeGetPostsMoreLike('example'))
            .resolves.not.toThrow();

        expect(getPostsMoreLikeSpy).toHaveBeenCalled();
    })

    it('Should not be able to get posts without tech', async () => {

        await expect(submitPost.executeGetPostsMoreLike(''))
            .rejects.toThrow();
    })
})

describe('Test for delete a post', () => {
    it('Should be able to delete post', async () => {

        await expect(submitPost.executeDelete('example'))
            .resolves.not.toThrow();

        expect(deletePostSpy).toHaveBeenCalled();
    })

    it('Should not be able to delete post without id', async () => {

        await expect(submitPost.executeDelete(''))
            .rejects.toThrow();
    })
})

describe('Test for give like the post', () => {
    it('Should be able to give like for a post', async () => {

        await expect(submitPost.executeGiveLike(
            'example',
            {
                avatar: 'example',
                content: 'example',
                email: 'example',
                tech: 'example',
                userName: 'example',
                userNick: 'example',
                likes: 1
            },
            1
        )).resolves.not.toThrow();

        expect(getGiveLikeSpy).toHaveBeenCalled();
    })

    it('Should not be able to submit a new like without id', async () => {

        await expect(submitPost.executeGiveLike(
            '',
            {
                avatar: 'example',
                content: 'example',
                email: 'example',
                tech: 'example',
                userName: 'example',
                userNick: 'example',
                likes: 1
            },
            1
        )).rejects.toThrow();
    })

    it('Should not be able to submit a new like without like', async () => {
        const test = {}
        await expect(submitPost.executeGiveLike(
            'example',
            {
                avatar: '',
                content: '',
                email: '',
                tech: '',
                userName: '',
                userNick: '',
                likes: 0
            },
            0
        )).rejects.toThrow();
    })
})