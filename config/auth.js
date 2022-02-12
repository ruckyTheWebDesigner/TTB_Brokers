const app = require('./db')
const { getAuth } = require('firebase/auth')

const auth = getAuth(app)

module.exports = auth
