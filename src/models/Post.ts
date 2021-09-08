import { Schema, model } from 'mongoose'

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: String,
  publishedAt: Date,
  labels: [String],
  text: {
    type: String,
    required: true,
  },
}, { collection: 'posts', strict: true })

const Post = model('Post', PostSchema)

export default Post