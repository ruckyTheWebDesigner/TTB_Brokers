const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const axios = require('axios').default
const routers = require('./controllers/router')

const app = express()
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.use(routers)

app.listen(port, () => {
  console.log(`app listening at ${port}`)
})
