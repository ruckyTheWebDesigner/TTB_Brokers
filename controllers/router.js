const express = require('express')
const loginrouter = require('./loginroute')
const signoutrouter = require('./signout')
const update = require('./updateroute')
const register = require('./registerroutes')
const resetPassword = require('./forgetpassword')
const verifyuser = require('./dashboard')
const upload = require('./upload')
const addUser = require('./adduser')
const handler = require('./handlers')
const authVerify = require('./auth-verify-email')
const findUser = require('./accounts')

const router = express.Router()

router.post('/login', loginrouter)

router.get('/', function (req, res) {
  res.render('index')
})

router.get('/resetpassword', function (req, res) {
  res.render('resetpassword', {
    message: '',
  })
})

router.post('/upload', upload)

router.get('/upload', function (req, res) {
  res.render('upload', {})
})

router.post('/resetpassword', resetPassword)

router.get('/signout', signoutrouter)

router.post('/update', update)

router.get('/register', function (req, res) {
  res.render('register', {
    message: 'OPEN ACCOUNT FOR FREE AND START TRADING BITCOINS',
  })
})

router.get('/secure/analytics', function (req, res) {
  res.render('analytics', {})
})

router.get('/verify-email', function (req, res) {
  res.render('verify-email', {})
})

router.get('/verified', function (req, res) {
  res.render('email-verified', {})
})

router.get('/secure/accounts', findUser)

router.get('/secure/dashboard', verifyuser)

router.get('/auth/action', handler)

router.get('/update', function (req, res) {
  res.render('update')
})

router.get('/login', function (req, res) {
  res.render('login', {
    message: 'Enter your credentials to access your account',
  })
})

router.get('/onboarding/auth/verify-email', authVerify)

router.post('/register', register)

module.exports = router
