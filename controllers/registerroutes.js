const app = require('../config/db')

const {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
} = require('firebase/firestore')

const {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  sendSignInLinkToEmail,
  sendEmailVerification,
  updateProfile,
} = require('firebase/auth')

const auth = getAuth(app)

const actionCodeSettings = {
  url: 'https://ctebrokers.com/login',
  // This must be true.
  handleCodeInApp: false,
}

const db = getFirestore(app)

const register = async (req, res) => {
  const data = req.body

  createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
    .then((userCredential) => {
      const user = userCredential.user
      const userId = user.uid

      setDoc(doc(db, 'users', user.uid), {
        userId: userId,
        info: data,
        registrationTime: new Date().toString(),
      })
      console.log('Document written with ID: ', userId)

      updateProfile(user, {
        displayName: req.body.displayName,
        emailVerified: false,
      }) // update profile
        .then(() => {
          sendEmailVerification(user, actionCodeSettings).then(() => {})
        })
        .catch((error) => {
          console.log(error)
        })

      res.redirect('/onboarding/auth/verify-email')
    })

    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message

      console.log(error)
    })
}

module.exports = register
