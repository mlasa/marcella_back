import express from 'express'
import dotenv from 'dotenv'
import connectToDB from './utils/connectToDB'
import router from './routes/index'
import cors from 'cors'

dotenv.config()


const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

connectToDB()
app.use(router)

var environment;
if (process.env.NODE_ENV === "production") {
    // use in production environment = "http://myapp.online/awesome-app/api";
    environment = "production";
}
else {
    // use on debugging environment = "/api"; 
    environment = "development";
}

app.listen(process.env.PORT, () => {
    console.log("\n ------------------------------");
    console.log(" | I'm alive! 🤖             |\n | at http://localhost:", process.env.PORT, "|\n | Environment: ", environment, "|")
    console.log("------------------------------ \n");
})
