import { Router } from 'express'
import SessionController from '../controllers/SessionController'

const sessionRouter = Router()

sessionRouter.post('/', async (request, response) => {
    const { password, username, email } = request.body

    const session = await SessionController.create({
        password, username, email
    });

    if (!session)
        return response.status(401).send()

    return response.status(200).json(session)
})

export default sessionRouter