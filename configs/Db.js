require('dotenv').config()

module.exports = {
  production: {
    mongo_uri: process.env.MONGO_URI
  },
  localhost: {
    mongo_uri: process.env.MONGO_URI
  }
}
