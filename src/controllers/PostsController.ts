import Post from '../models/Post'

interface PostDTO {
  title: String;
  author: String;
  labels: String;
  text: String;
  publishedAt: Date,
}

const search = async ({ limit, page, fields, orderBy, sortBy, keyWord }) => {


  const skip = (page > 1) ? (page - 1) * limit : 0
  const allPosts = Post.find()

  if (keyWord) {
    const regex = new RegExp(`.*${keyWord}.*`, 'i')
    const searchQuery = {
      $or: [
        { author: regex },
        { title: regex },
        { labels: regex },
      ]
    }
    allPosts.find(searchQuery)
  }

  if (limit) allPosts.limit(limit)
  if (skip) allPosts.skip(skip)
  if (fields) allPosts.select(fields.split(','));
  if (orderBy) allPosts.sort({ [orderBy]: sortBy });
  return allPosts.exec();
}


const create = async (postData: PostDTO) => {
  const post = await Post.create(postData)
  return post || null
}
const findPostbyId = async (id) => {
  const post = await Post.findById(id)
  if (!post)
    return null
  return post
}
const remove = async (id) => {
  const post = await findPostbyId(id)
  if (!post) {
    return false
  }
  await Post.deleteOne({ _id: id })
  return true
}
export default { create, remove, search }