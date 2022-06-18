import Profile from '../models/Profile'

interface ProfileDTO {
	name: string;
	tags: string[];
	description: string;
	job?: string;
}

interface UpdateObject {
	tags?: Array<string>;
	name?: string;
	description?: string;
	job?: string;
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

	const profile = await Profile.findById(id); //                 <-  DONE: corrigir problema para encontrar o dado pelo ID

	if (!profile)                                               // ObjectId("6137aeee08f6f04ce0e47f85")
		return null


	const updateObject: UpdateObject = {};

	if (data.tags) {
		updateObject.tags = data.tags;
	}
	if (data.description) {
		updateObject.description = data.description;
	}
	if (data.name) {
		updateObject.name = data.name;
	}
	if (data.job) {
		updateObject.job = data.job;
	}

	await Profile.updateOne({ _id: id }, updateObject)

	return await Profile.findById(id)
}

async function remove(id: String) {

	await Profile.deleteOne({ _id: id })
}

export default { create, index, remove, update }