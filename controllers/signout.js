const firebaseConfig = require('../config/config')
const app = require('../config/db')

const { getAuth, onAuthStateChanged, signOut } = require('firebase/auth')

const auth = getAuth(app)

const signoutrouter = (req, res) => {
  console.log(auth.currentUser.email)
  signOut(auth)
    .then(() => {
      res.redirect('login')
    })
    .catch((error) => {
      console.error(error)
    })
}

module.exports = signoutrouter
