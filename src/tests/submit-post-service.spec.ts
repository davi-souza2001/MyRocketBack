import { SubmitPostService } from '../services/post/submit-post-service';

const createPostSpy = jest.fn();

const submitPost = new SubmitPostService(
    {
        create: createPostSpy,
    }
)

describe('Tests for submit a new post', () => {

    it('Should be able to submit a post', async () => {

        await expect(submitPost.executeCreate({
            avatar: 'example',
            content: 'example',
            email: 'example@gmail',
            likes: { "1": "example" },
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
            likes: { "1": "example" },
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
            likes: { "1": "example" },
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
            likes: { "1": "example" },
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
            likes: { "1": "example" },
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
            likes: { "1": "example" },
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
            likes: { "1": "example" },
            tech: 'example',
            userName: 'example',
            userNick: '',
        })).rejects.toThrow();
    })
})