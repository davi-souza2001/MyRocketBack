import express from 'express'
import { PrismaEmails } from '../repositories/prisma/prisma-email'
import { SubmitEmailService } from '../services/email/submit-email-service'
import { emailWelcome } from '../utils/emailsTemplates'

export const routesEmail = express.Router()

routesEmail.post('/email/sendEmailForCreateNewAccount', async (req, res) => {

    const { toEmail } = req.body

    const email = new PrismaEmails()

    const submitEmailService = new SubmitEmailService(email)

    try {

        await submitEmailService.executeSend({
            from: process.env.EMAIL_TO as string,
            html: emailWelcome,
            subject: 'Welcoma aboard!',
            text: 'error',
            to: toEmail
        })

        return res.status(200).json({ message: 'Enviou!' })
    } catch (error: any) {

        return res.status(401).json({ message: error.message })
    }
})