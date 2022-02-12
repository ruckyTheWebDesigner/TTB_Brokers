const firebaseConfig = require('./config')
const { initializeApp } = require('firebase/app')
const app = initializeApp(firebaseConfig)

module.exports = app
