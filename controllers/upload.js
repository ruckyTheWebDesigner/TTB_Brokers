const {
  getStorage,
  ref,
  uploadBytes,
  uploadString,
  uploadFile,
} = require('firebase/storage')
require('firebase/storage')

const cloudinary = require('cloudinary').v2

cloudinary.config({
  cloud_name: 'dbkpx9t5y',
  api_key: '767644167824881',
  api_secret: 'jCwtt-lpeksEkKYl7ueonxNJKV8',
})

const app = require('../config/db')

const storage = getStorage()

const metadata = {
  contentType: 'image/jpeg',
}

// 'file' comes from the Blob or File API
const upload = async (req, res, next) => {
  const file = req.file

  console.log(req.files)

  const result = await cloudinary.uploader
    .upload(file, { public_id: 'user' }, function (error, result) {
      console.log(result)
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = upload
