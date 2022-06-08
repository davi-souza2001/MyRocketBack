import express from 'express'
import cors from 'cors'
import { routesUser } from './routes/users-routes'
import { routesPost } from './routes/posts-routes'

const app = express()

app.use(express.json())
app.use(cors())
app.use(routesUser)
app.use(routesPost)

app.listen(process.env.PORT || 3333, () => {
    console.log(`Server Running in ${process.env.PORT || 3333}!`);
});