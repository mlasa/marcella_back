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
    console.log('cheguei: ', id);
    const profile = await Profile.findById(id); //                 <-  TODO: corrigir problema para encontrar o dado pelo ID
    console.log('profile: ', profile);                       // Não encontra o ID certo porque no banco está nesse formato
    if (!profile)                                               // ObjectId("6137aeee08f6f04ce0e47f85")
        return null

    console.log('perfil: ', data);
    await Profile.updateOne({ _id: id }, data)

    return await Profile.findById(id)
}

async function remove(id: String) {

    await Profile.deleteOne({ _id: id })
}

export default { create, index, remove, update }