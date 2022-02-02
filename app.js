const express = require('express')
const bodyParser = require('body-parser')
// const request = require("request");
const port = process.env.PORT || 3000
const axios = require('axios').default

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.render('index', {})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
