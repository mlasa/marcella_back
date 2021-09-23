import { Router } from 'express'
import SessionController from '../controllers/SessionController'

const sessionRouter = Router()

sessionRouter.post('/', async (request, response) => {
    const { password, username, email } = request.body

    const auth = await SessionController.create({
        password, username, email
    });

    if (auth) {

        delete auth.user.password

        if (!auth.token)
            return response.status(400).json({ errorMessage: 'Credenciais podem estar incorretas' })

        return response.status(200).json({ token: auth.token, user: auth.user })
    }
    else {
        return response.status(400).json({ errorMessage: 'Credenciais incorretas' })
    }

})

export default sessionRouter