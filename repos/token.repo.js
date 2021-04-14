const { Token, User } = require('../models')

exports.createToken = async (data) => {
  return (await Token.create(data))
}

exports.getTokenWithUser = async (conditions) => {
  return (await Token.findOne({
    where: conditions,
    include: [
      { model: User, as: 'user' }
    ]
  }))
}

exports.getToken = async (conditions) => {
  return (await Token.findOne({
    where: conditions
  }))
}
