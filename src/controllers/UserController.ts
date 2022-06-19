import User from '../models/User'
import { encrypt } from '../utils/libs/Bcrypt'

interface IUser {
    username: string;
    name: string;
    email: string;
    password: string;
}
interface UpdateObject {
    username?: string;
    name?: string;
}

async function index() {
    const profile = await User.find()

    return profile
}

async function create(data: IUser) {
    const { username, name, email, password } = data

    const encryptedPassword = await encrypt(password)

    const userCreated = await User.create({
        username,
        name,
        email,
        password: encryptedPassword
    })


    return userCreated || null
}

async function update(id: String, data: Omit<IUser, "email" | "password">) {

    const user = await User.findById(id); //                 <-  DONE: corrigir problema para encontrar o dado pelo ID

    if (!user)                                               // ObjectId("6137aeee08f6f04ce0e47f85")
        return null


    const updateObject: UpdateObject = {};

    if (data.username) {
        updateObject.username = data.username;
    }
    if (data.name) {
        updateObject.name = data.name;
    }

    await User.updateOne({ _id: id }, updateObject)

    return user;
}

export default { create, index, update }