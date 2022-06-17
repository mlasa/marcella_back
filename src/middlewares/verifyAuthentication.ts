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

    if (!authorization) {
        console.log('authorization: ', authorization);
        return response.status(401).send("Essa rota exige autenticação")
    }


    const [, token] = authorization.split(' ')

    try {
        const decoded = verify(token, AUTH_CONFIG.secret)
        console.log("decoded", decoded);
        const { sub } = decoded as ITokenPaylod
        request.user = { _id: sub } // Vai adicionar na request os dados do usuário autenticado

        //return next()
        next()
    } catch (err) {
        console.log('Error: ', err);
        return response.status(401).send('Token inválido')
    }
}
