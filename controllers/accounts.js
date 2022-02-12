const {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  query,
  orderBy,
  limit,
  where,
  getDocs,
} = require('firebase/firestore')

const { getAuth } = require('firebase/auth')

const app = require('../config/db')

const auth = getAuth(app)
const db = getFirestore(app)

const usersRef = collection(db, 'users')

const findUser = async (req, res) => {
  const user = auth.currentUser

  if (user) {
    const docRef = doc(db, 'users', user.uid)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const email = docSnap.data().info.email
      const displayName = docSnap.data().info.displayName
      const photoURL = docSnap.data().info.photoURL
      const uid = docSnap.data().info.uid
      const emailVerified = docSnap.data().info.emailVerified
      const registrationTime = docSnap.data().registrationTime
      const phone = docSnap.data().info.phone

      res.render('accounts', {
        email: email,
        displayName: displayName,
        emailVerified: emailVerified,
        registrationTime: registrationTime,
        phone: phone,
        country: docSnap.data().info.country,
        available: docSnap.data().info.available,
        buy: docSnap.data().info.buy,
        sell: docSnap.data().info.sell,
      })
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!')
      res.render('accounts', {
        email: '',
        displayName: '',
        emailVerified: '',
        registrationTime: '',
        phone: '',
        avaliable: 0.0,
        buy: 0.0,
        sell: 0.0,
        country: '',
      })
    }
  } else {
    // No user is signed in.
    res.render('login', {
      message: 'Session has expired, please login again',
    })
  }
}

module.exports = findUser
