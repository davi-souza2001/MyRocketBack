import { Email } from '../../utils/email'

export interface SubmitEmailServiceRequest {
    from: string
    to: string
    subject: string
    html: string
    text: string
}

export class SubmitEmailService {
    constructor(
        private emailRepository: Email
    ) { }

    async executeSend(email: SubmitEmailServiceRequest) {
        const {
            from,
            html,
            subject,
            text,
            to
        } = email

        if (!from) {
            throw new Error('Your email needs to come from someone!')
        }

        if (!html) {
            throw new Error('Make the body of your email!')
        }

        if (!subject) {
            throw new Error('Make the subject of your email!')
        }

        if (!text) {
            throw new Error('Make the text of your email!')
        }

        if (!to) {
            throw new Error('Your email needs to come to someone!')
        }

        await this.emailRepository.sendEmail({
            from,
            html,
            subject,
            text,
            to
        })
    }
}
