const { localUpload } = require('../uploaders/Local')
const { awsS3Upload } = require('../uploaders/S3')
const Vnexpress = require('../services/externals/Vnexpress')

exports.new = async (req, res) => {
  const data = await req.file()
  const url = await awsS3Upload(data.file)
  res.send(url)
}

exports.form = async (req, res) => {
  const html = await Vnexpress.getDetail('https://vnexpress.net/bo-y-te-khan-cap-tim-nguoi-chung-chuyen-bay-tu-nhat-ban-ve-da-nang-4270586.html')
  const text = `<form action="http://localhost:3333/upload/new" method="post" enctype="multipart/form-data">
  Select image to upload:
  <input type="file" name="fileToUpload" id="fileToUpload">
  <input type="submit" value="Upload Image" name="submit">
</form>${html}`
  res.type('text/html').send(text)
}
