import { Router } from 'express'
import postsRouter from './posts'
import profileRouter from './profile'
import sessionRouter from './session'
import userRouter from './user'

const router = Router()
/*
  Essa é uma rota para testar se a API está funcionando.
*/
router.get('/', async (request, response) => {
  return response.status(200).json({ funcionando: ' tudo belezinha!' })
})

// Rotas divididas por módulos
router.use('/posts', postsRouter)
router.use('/profile', profileRouter)
router.use('/session', sessionRouter)
router.use('/user', userRouter)


export default router