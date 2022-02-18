const app = require('../config/db')

const { getAuth } = require('firebase/auth')

const auth = getAuth(app)

const authVerify = async (req, res) => {
  const user = auth.currentUser

  if (user) {
    // The user object has basic properties such as display name, email, etc.
    const email = user.email

    res.render('auth-verification', {
      email: email,
    })
  } else {
    res.redirect('/login')
  }
}

module.exports = authVerify
