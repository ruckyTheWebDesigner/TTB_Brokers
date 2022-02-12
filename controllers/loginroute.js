const app = require('../config/db')

const {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} = require('firebase/auth')

const auth = getAuth(app)

const loginrouter = (req, res, next) => {
  signInWithEmailAndPassword(auth, req.body.email, req.body.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user

      if (user !== null) {
        const emailVerified = user.emailVerified

        if (emailVerified == true) {
          res.redirect('/secure/dashboard')
        } else {
          res.render('login', {
            message: 'Kindly verify your email to proceed login',
          })
        }
      }
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      res.render('login', {
        message: 'There was an Error: ' + errorCode,
      })
    })

  onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      const uid = user.uid
      console.log(user.email + ' just signed in')
      // ...
    } else {
      console.log('user is signed out')
    }
  })
}

module.exports = loginrouter
