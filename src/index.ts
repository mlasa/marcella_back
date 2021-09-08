import express from 'express'
import dotenv from 'dotenv'
import connectToDB from './utils/connectToDB'
import router from './routes/index'

dotenv.config()

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

connectToDB()
app.use(router)


app.listen(process.env.PORT, () => console.log("I'm alive! 🤖 --> http://localhost:3333"))
