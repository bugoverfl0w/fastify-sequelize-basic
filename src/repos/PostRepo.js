import {
  Post as PostModel,
  User as UserModel
} from 'models'
import { PostRedis } from 'cache/redis'
import { CACHE } from 'configs/Constant'

exports.getPosts = async () => {
  let posts = await PostRedis.getPosts(true)
  if (posts) {
    return posts
  }

  posts = await PostModel.find()
  await PostRedis.setPosts(posts, CACHE.HOUR(10000), true)

  return posts
}

exports.getPost = async (id) => {
  return (await PostModel.findByPk(id, {
    include: UserModel
  }))
}

exports.createPost = async (data) => {
  return (await PostModel.create(data))
}

exports.createPosts = async (data) => {
  return (await PostModel.bulkCreate(data))
}

exports.deleteById = async (id) => {
  return (await PostModel.destroy({ where: { id: id } }))
}

exports.getUserPosts = async (userId) => {
  return (await PostModel.find({ user_id: userId }))
}

exports.updatePost = async (id, data) => {
  return (await PostModel.update(data, { where: { id: id } }))
}
