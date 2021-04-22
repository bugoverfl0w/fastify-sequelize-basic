const crypto = require('crypto')

exports.sha256 = (text, salt) => {
  return crypto.createHash('sha256').update(text + salt).digest('hex').substr(0, 32)
}
