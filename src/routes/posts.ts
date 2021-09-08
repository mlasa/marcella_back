import { Router } from 'express'
import postsController from '../controllers/PostsController'

const postsRouter = Router();

postsRouter.get('/', async (request, response) => {
    const { limit, page, fields, orderBy, sortBy, keyWord } = request.query

    const filterParams = {
        limit: Number(limit) || 3,
        page: Number(page) || 1,
        fields: fields || null,
        orderBy: orderBy || 'publishedAt',
        sortBy: sortBy !== undefined ? Number(sortBy) : 0,
        keyWord: keyWord || null,
    }


    const results = await postsController.search(filterParams)

    return response.status(200).json(results)
})

postsRouter.post('/', async (request, response) => {
    const { title, text, author, labels } = request.body;

    if (!title || !text)
        return response.status(400).send('At least title and text must exist')

    const postCreated = await postsController.create({
        title,
        author,
        labels,
        text,
        publishedAt: new Date(),
    })

    return response.status(200).json(postCreated)

})

postsRouter.delete('/', async (request, response) => {
    const { id } = request.query;

    if (!id)
        return response.status(400).send('Id nedeed for delete')

    const postToRemove = await postsController.remove(id)
    if (!postToRemove)
        return response.status(400).send('Post not found')

    return response.status(200).send()
})

export default postsRouter;