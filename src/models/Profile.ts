import { Schema, model } from 'mongoose'

const ProfileSchema = new Schema({
    _id: String,
    name: {
        type: String,
    },
    tags: [String],
    description: {
        type: String,
    },
}, { collection: 'profile', strict: false })

const Profile = model('Profile', ProfileSchema)

export default Profile