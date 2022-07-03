import Profile from '../models/Profile'

interface ProfileDTO {
	name: string;
	tags: string[];
	description: string;
	job?: string;
	experiences?: Array<Object>;
	interests?: Object;
}

interface UpdateObject {
	tags?: Array<string>;
	name?: string;
	description?: string;
	job?: string;
	experiences?: Array<Object>;
	interests?: Object;
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
	if (data.experiences) {
		updateObject.experiences = data.experiences;
	}
	if (data.interests) {
		updateObject.interests = data.interests;
	}

	await Profile.updateOne({ _id: id }, updateObject)

	//return await Profile.findById(id)
	return profile;
}

async function remove(id: String) {

	await Profile.deleteOne({ _id: id })
}

export default { create, index, remove, update }