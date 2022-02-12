const { doc, setDoc } = require('firebase/firestore')
const { getFirestore, collection, addDoc } = require('firebase/firestore')

const app = require('../config/db')
const db = getFirestore(app)

const addUser = async (req, res) => {
  try {
    const data = req.body

    await addDoc(collection(db, 'users'), {
      info: data,
    })
    console.log('Document written with ID')
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

module.exports = addUser
