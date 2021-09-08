import { Schema, model, Model, Document } from 'mongoose'

export interface IUser extends Document {
    name: String;
    username: String;
    email: String;
    password: String;
}

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
}, { collection: 'user', strict: true })

const User: Model<IUser> = model<IUser>('User', UserSchema)

export default User