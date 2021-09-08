import User from '../models/User'
import { encrypt } from '../utils/libs/Bcrypt'

interface User {
    username: String;
    name: String;
    email: String;
    password: String;
}

async function index() {
    const profile = await User.find()

    return profile
}

async function create(data: User) {
    const { username, name, email, password } = data

    console.log('Vou encriptar')
    const encryptedPassword = await encrypt(password)

    const userCreated = await User.create({
        username,
        name,
        email,
        password: encryptedPassword
    })


    return userCreated || null
}

export default { create, index }