const { uploader } = require('../configs/Env')
const AWS = require('aws-sdk')

// todo: remove ...

exports.upload = async (fileStream) => {
  const s3 = new AWS.S3({
    accessKeyId: uploader.aws.key,
    secretAccessKey: uploader.aws.secret,
    endpoint: uploader.aws.base_url
  })

  const params = {
    Bucket: uploader.aws.bucket,
    Key: 'cainoi.txt',
    Body: fileStream,
    ACL: 'public-read'
  }

  let uploaded
  try {
    uploaded = await s3.upload(params).promise()
  } catch (err) {
    console.log('upload error', err)
    return false
  }
  return uploaded.Location
}
