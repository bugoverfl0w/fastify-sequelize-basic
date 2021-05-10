import {
  User as UserModel,
  Post as PostModel
} from 'models'
import { UserRedis } from 'cache/redis'
import { CACHE } from 'configs/Constant'

exports.getUsers = async () => {
  let users = await UserRedis.getUsers(true)
  if (users) {
    return users
  }

  users = await UserModel.findAll()
  await UserRedis.setUsers(users, CACHE.MINUTE(30), true)

  return users
}

exports.getUser = async (id) => {
  return (await UserModel.findByPk(id, {
    include: PostModel
  }))
}

exports.getUserByConditions = async (conditions) => {
  return (await UserModel.findOne({ where: conditions }))
}

exports.createUser = async (data) => {
  return (await UserModel.create(data))
}
