const { getAuth, sendPasswordResetEmail } = require('firebase/auth')
const app = require('../config/db')

const resetPassword = (req, res) => {
  const auth = getAuth(app)
  sendPasswordResetEmail(auth, req.body.email)
    .then(() => {
      // Password reset email sent!
      const msg = 'Password reset email sent to' + req.body.email

      // eslint-disable-line
      res.render('resetpassword', { message: msg })
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(error)
      res.render('resetpassword', { message: errorCode })
    })
}

module.exports = resetPassword
