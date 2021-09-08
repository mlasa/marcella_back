import User from '../models/User'
import { compareTwo } from '../utils/libs/Bcrypt'
import { generateAuthenticationToken } from '../utils/libs/JsonWebToken'

interface SessionDTO {
    username: String;
    email?: String;
    password: String;
}

async function create(data: SessionDTO) {
    const userFound = await User.findOne({
        $or: [
            { username: data.username },
            { email: data.email }
        ]
    })

    const user = userFound.toJSON()

    if (!user)
        return null

    const passwordIsEqual = await compareTwo(data.password, user.password)

    if (passwordIsEqual) {
        const token = await generateAuthenticationToken(user)
        return user
    }

}

export default { create }