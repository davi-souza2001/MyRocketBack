export interface EmailData{
    from: string
    to: string
    subject: string
    html: string
    text: string
}

export interface Email{
    sendEmail: (email: EmailData) => Promise<void>
}