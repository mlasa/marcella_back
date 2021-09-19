import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

const AUTH_CONFIG = {
    secret: process.env.SECRET_TOKEN,
    timeExpiration: process.env.TIME_EXPIRATION_AUTH_TOKEN
}

interface ITokenPaylod {
    iat: number;
    exp: number;
    sub: string;
}

interface IRequest extends Request {
    user: { id: string };
}

export default function verifyAuthentication(
    request: IRequest,
    response: Response,
    next: NextFunction
): Response | NextFunction {
    const authorization = request.headers.authorization

    if (!authorization) return response.status(401).send("Esta ação exige autenticação")

    const [, token] = authorization.split(' ')

    try {
        const decoded = verify(token, AUTH_CONFIG.secret)
        const { sub } = decoded as ITokenPaylod
        request.user = { id: sub } // Vai adicionar na request os dados do usuário autenticado

        //return next()
        next()
    } catch (err) {
        return response.status(401).send('Acão requer autenticação')
    }
}
