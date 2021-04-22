const { uploader } = require('../configs/Env')
const fs = require('fs')
const util = require('util')
const path = require('path')
const { pipeline } = require('stream')
const pump = util.promisify(pipeline)

exports.localUpload = async (fileStream) => {
  const uploadDir = uploader.dir
  if (!fs.existsSync(uploadDir)) { fs.mkdirSync(uploadDir, { recursive: true }) }

  const filename = 'cainoi.txt'
  await pump(fileStream, fs.createWriteStream(filename))
  return path.join(uploader.file.base_url, '/', filename)
}
