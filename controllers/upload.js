const {
  getStorage,
  ref,
  uploadBytes,
  uploadString,
} = require('firebase/storage')
const app = require('../config/db')

const storage = getStorage(app)

const metadata = {
  contentType: 'image/jpeg',
}

// 'file' comes from the Blob or File API
const upload = (req, res) => {
  const file = req.body.filename

  const storageRef = ref(storage, 'images/')
  const bytes = new Uint8Array([
    0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64,
    0x21,
  ])
  uploadBytes(storageRef, bytes, file, metadata).then((snapshot) => {
    console.log('Uploaded an array!')
  })
}

module.exports = upload
