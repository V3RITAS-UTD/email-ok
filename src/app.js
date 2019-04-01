const Koa = require('koa')
const logger = require('koa-logger')
const route = require('koa-route')
const checkEmail = require('./check-email.js')
const PORT = process.env.PORT || 3000
const app = new Koa()
app.use(logger()) // attach logger

// set main endpoint
app.use(route.get('/check/:email', checkEmail))

// check if is running under test env.
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT)
  console.log(`* email-ok listening on port ${PORT}`)
}

module.exports = app
