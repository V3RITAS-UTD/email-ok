const test = require('tape')
const supertest = require('supertest')
const app = require('../src/app.js')

let server
let request
test('Start server', t => {
  server = app.listen()
  request = supertest(server)
  t.end()
})

test('Check disposable email', t => {
  request
    .get('/check/test@fast-mail.one')
    .expect(200)
    .end((err, res) => {
      if (err) throw err
      t.equals(res.text, JSON.stringify({ disposable: true }))
      t.end()
    })
})

test('Check legit email', t => {
  request
    .get('/check/test@gmail.com')
    .expect(200)
    .end((err, res) => {
      if (err) throw err
      t.equals(res.text, JSON.stringify({ disposable: false }))
      t.end()
    })
})

test('Check invalid email', t => {
  request
    .get('/check/this is not valid')
    .expect(400)
    .end((err, res) => {
      if (err) throw err
      t.end()
    })
})

test('Shutdown server', t => {
  server.close()
  t.end()
})
