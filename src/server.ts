import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import { routesUser } from './routes/users-routes'
import { routesPost } from './routes/posts-routes'
import { routesEmail } from './routes/emails-routes'

const dot = dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())
app.use(routesUser)
app.use(routesPost)
app.use(routesEmail)

app.listen(process.env.PORT || 3333, () => {
    console.log(`Server Running in ${process.env.PORT || 3333}!`);
});