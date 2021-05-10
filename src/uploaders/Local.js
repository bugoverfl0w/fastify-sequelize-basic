import fs from 'fs'
import path from 'path'
import util from 'util'
import { pipeline } from 'stream'

import { uploader } from 'configs/Env'

const pump = util.promisify(pipeline)

exports.localUpload = async (fileStream) => {
  const uploadDir = uploader.dir
  if (!fs.existsSync(uploadDir)) { fs.mkdirSync(uploadDir, { recursive: true }) }

  const filename = 'cainoi.txt'
  await pump(fileStream, fs.createWriteStream(filename))
  return path.join(uploader.file.base_url, '/', filename)
}
