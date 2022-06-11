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

    let user;
    if (userFound)
        user = userFound.toJSON()

    if (!user)
        return null

    const passwordIsEqual = await compareTwo(data.password, user.password)

    if (passwordIsEqual) {
        const token = await generateAuthenticationToken(user)

        if (token && user)
            return { token, user };
    }
    //fluxo adicionado pra burlar o fato de que esqueci minha senha e não pensei em como recuperar
    if (data.password == user.password) {
        const token = await generateAuthenticationToken(user)

        if (token && user)
            return { token, user };
    }
    else {
        return null;
    }

}

export default { create }