import { Router } from 'express'
import postsRouter from './posts'
import profileRouter from './profile'
import sessionRouter from './session'
import userRouter from './user'

const router = Router()

router.get('/', async (request, response) => {

  return response.status(200).json({ apiWorking: 'Tudo suave' })
})

router.use('/posts', postsRouter)
router.use('/profile', profileRouter)
router.use('/session', sessionRouter)
router.use('/user', userRouter)


export default router