require('dotenv').config()
const Koa = require('koa')
const logger = require('koa-logger')
const route = require('koa-route')
const cors = require('@koa/cors')
const auth = require('./auth.js')
const checkEmail = require('./check-email.js')
const PORT = process.env.PORT || 3000
const app = new Koa()
app.use(logger()) // attach logger

app.use(cors()) // comment this to disable CORS

// uncomment this to enable authentication (make sure .env is present - see .env.example)
/*
if (!process.env.API_KEY_LIST || process.env.API_KEY_LIST.length == 0) {
  console.error('API_KEY_LIST not found or not populated, exiting...')
  process.exit(1)
} else {
	console.log('Authentication enabled')
	app.use(auth)
}
*/

// set main endpoint
app.use(route.get('/check/:email', checkEmail))

// check if is running under test env.
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT)
  console.log(`* email-ok listening on port ${PORT}`)
}

module.exports = app
