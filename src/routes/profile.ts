import { Router } from 'express'
import profileController from '../controllers/ProfileController'

const profileRouter = Router()

profileRouter.get('/', async (request, response) => {

    const profile = await profileController.index()
    return response.status(200).json(profile)

})

profileRouter.post('/', async (request, response) => {

    const { name, description, tags } = request.body

    const profile = await profileController.create({
        name, description, tags
    })
    return response.status(200).json(profile)

})

profileRouter.put('/:id', async (request, response) => {

    const { name, description, tags } = request.body
    const { id } = request.query

    const profile = await profileController.update(id + '', {
        name, description, tags
    })
    return response.status(200).json(profile)

})

profileRouter.delete('/', async (request, response) => {
    const { id } = request.body

    await profileController.remove(id)

    return response.status(202).send("O perfil foi excluído")

})

export default profileRouter