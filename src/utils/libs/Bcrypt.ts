import bcrypt from 'bcrypt'

export async function encrypt(data: String) {
    const hashedData = await bcrypt.hash(data, 10)

    return hashedData
}

export async function compareTwo(data: String, encrypted: String) {
    const isEqual = await bcrypt.compare(data, encrypted)

    return isEqual
}