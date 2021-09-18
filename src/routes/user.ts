import { Router } from 'express'
import UserController from '../controllers/UserController'

const userRouter = Router()

//Implementar jwt authentication e somente após isso liberar essa rota
/*userRouter.get('/', async (request, response) => {

    const user = await UserController.index()
    return response.status(200).json(user)

})*/

userRouter.post('/', async (request, response) => {

    const { name, username, email, password } = request.body

    const user = await UserController.create({
        name, username, email, password
    })
    return response.status(200).json(user)

})

export default userRouter