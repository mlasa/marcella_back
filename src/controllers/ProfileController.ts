import Profile from '../models/Profile'

interface ProfileDTO {
    name: String;
    tags: String[];
    description: String;
}

async function index() {
    const profile = await Profile.find()

    return profile
}

async function create(data: ProfileDTO) {
    const profile = await Profile.create(data)
    return profile || null
}

async function update(id: String, data: ProfileDTO) {
    const profile = await Profile.findById(id)
    if (!profile)
        return null

    await Profile.updateOne({ _id: id }, data)

    return await Profile.findById(id)
}

async function remove(id: String) {

    await Profile.deleteOne({ _id: id })
}

export default { create, index, remove, update }