import { Schema, model } from 'mongoose'

const ProfileSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: false
    },
    description: {
        type: String,
        required: false
    },
    job: {
        type: String,
        required: false
    }
}, { collection: 'profile', strict: false })

const Profile = model('Profile', ProfileSchema)

export default Profile