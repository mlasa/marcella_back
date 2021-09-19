import { Router } from 'express'
import SessionController from '../controllers/SessionController'

const sessionRouter = Router()

sessionRouter.post('/', async (request, response) => {
    const { password, username, email } = request.body

    const { token, user } = await SessionController.create({
        password, username, email
    });

    delete user.password

    if (!token)
        return response.status(401).json({ errorMessage: 'Credenciais podem estar incorretas' })

    return response.status(200).json({ token, user })
})

export default sessionRouter