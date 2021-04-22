const mongoose = require('mongoose')

const Schema = mongoose.Schema

const tokenSchema = new Schema(
  {
    token: {
      type: String
    },
    created_time: {
      type: Number
    },
    expired_time: {
      type: Number
    },
    user_id: {
      type: mongoose.Types.ObjectId,
      ref: 'users'
    }
  }
)

module.exports.Token = mongoose.model('tokens', tokenSchema)
