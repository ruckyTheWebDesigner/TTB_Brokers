const app = require('../config/db')

const {
  getAuth,
  updateProfile,
  checkActionCode,
  applyActionCode,
  sendPasswordResetEmail,
} = require('firebase/auth')

const auth = getAuth(app)

const handler = async (req, res) => {
  const mode = req.query.mode
  const actionCode = req.query.oobCode

  switch (mode) {
    case 'resetPassword':
      // Display reset password handler and UI.
      handleResetPassword(auth, actionCode, continueUrl, lang)
      break
    case 'recoverEmail':
      // Display email recovery handler and UI.
      handleRecoverEmail(auth, actionCode, lang)
      break
    case 'verifyEmail':
      applyActionCode(auth, actionCode)
        .then((resp) => {
          console.log(resp)
          res.render('email-verified', {})
        })
        .catch((error) => {
          console.log(error)
        })

      break
    default:
    // Error: invalid mode.
  }
}

module.exports = handler
