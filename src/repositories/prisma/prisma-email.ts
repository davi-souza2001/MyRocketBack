import nodemailer from 'nodemailer'

import { Email, EmailData } from '../../utils/email'

export class PrismaEmails implements Email {

    async sendEmail({
        from,
        html,
        subject,
        text,
        to
    }: EmailData) {

        const transport = nodemailer.createTransport({
            host: process.env.HOST_URL,
            port: 465,
            secure: true,
            auth: {
                user: process.env.AUTH_USER,
                pass: process.env.PASS_USER
            }
        })

        await transport.sendMail({
            from,
            html,
            subject,
            text,
            to,
        })
    }

}