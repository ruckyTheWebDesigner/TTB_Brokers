const app = require('../config/db')

const { getAuth, updatePassword, onAuthStateChanged } = require('firebase/auth')

const update = (req, res) => {
  const auth = getAuth(app)
  const user = auth.currentUser
  const newPassword = req.body.newPassword

  updatePassword(user, newPassword)
    .then(() => {
      console.log('updated successfully')
    })
    .catch((error) => {
      console.log(error)
    })
}

module.exports = update
