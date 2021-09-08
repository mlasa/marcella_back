import { Router } from 'express'
import SessionController from '../controllers/SessionController'

const sessionRouter = Router()

sessionRouter.post('/', async (request, response) => {
    const { password, username, email } = request.body

    await SessionController.create({
        password, username, email
    });

    return response.status(204).send('Rota de login')
})

export default sessionRouter