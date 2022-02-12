const { getAuth } = require('firebase/auth')
const app = require('../config/db')

const verifyuser = (req, res, next) => {
  const auth = getAuth(app)
  const user = auth.currentUser
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName
    const email = user.email
    const photoURL = user.photoURL
    const emailVerified = user.emailVerified
    const uid = user.uid

    res.render('dashboard', {
      email: email,
      photoURL: photoURL,
      uid: uid,
      displayName: displayName,
      emailVerified: emailVerified,
    })
  } else {
    res.redirect('/login')
  }
}

module.exports = verifyuser
