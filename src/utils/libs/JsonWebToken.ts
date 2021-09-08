import jwt from 'jsonwebtoken'

export async function generateAuthenticationToken(payload) {
    return await jwt.sign(payload, process.env.SECRET_TOKEN, {

        expiresIn: parseInt(process.env.TIME_EXPIRATION_AUTH_TOKEN)

    })
}