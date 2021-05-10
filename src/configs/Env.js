module.exports = {
  redis: {
    uri: process.env.REDIS_URI,
    prefix: process.env.REDIS_PREFIX || ''
  },
  uploader: {
    storage: process.env.UPLOAD_STORAGE || 'file',
    dir: process.env.UPLOAD_DIR || 'uploads',
    file: {
      base_url: '/'
    },
    aws: {
      key: process.env.S3_KEY,
      secret: process.env.S3_SECRET,
      base_url: process.env.S3_ASSET_URL,
      bucket: process.env.S3_BUCKET_NAME,
      region: process.env.S3_REGION || ''
    }
  },
  es_host: process.env.ES_HOST
}
