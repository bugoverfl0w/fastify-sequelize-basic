const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema(
  {
    title: {
      type: String
    },
    content: {
      type: String
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'user'
    }
  }
)

module.exports.Post = mongoose.model('posts', postSchema)
