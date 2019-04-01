const Koa = require('koa')
const logger = require('koa-logger')
const route = require('koa-route')
const checkEmail = require('./check-email.js')
const PORT = process.env.PORT || 3000
const app = new Koa()
app.use(logger()) // start simple logger

app.use(route.get('/check/:email', checkEmail))

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT)
  console.log(`* email-ok listening on port ${PORT}`)
}

module.exports = app
