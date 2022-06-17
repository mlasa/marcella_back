import { Router } from 'express'
import profileController from '../controllers/ProfileController'
import verifyAuthentication from '../middlewares/verifyAuthentication'

const profileRouter = Router()

profileRouter.get('/', async (request, response) => {

    const profile = await profileController.index()
    return response.status(200).json(profile)

})

profileRouter.use(verifyAuthentication)

profileRouter.post('/', async (request, response) => {

    const { name, description, tags } = request.body

    const profile = await profileController.create({
        name, description, tags
    })
    return response.status(200).json(profile)

})

profileRouter.put('/:id', async (request, response) => {
    console.log('\n\n request: ', request.body);

    const { name, description, tags } = request.body
    const { id } = request.params
    console.log('id: ', request.params);

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