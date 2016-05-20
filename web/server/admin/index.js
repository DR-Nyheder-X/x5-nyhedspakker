import express from 'express'
import bodyParser from 'body-parser'
import 'bluebird'

// ROUTER ---

const admin = express.Router()

admin.use(bodyParser.urlencoded({ extended: true }))

// BASIC AUTH ---

import auth from 'http-auth'

const { ADMIN_USER, ADMIN_PASS } = process.env

// Basic Auth
admin.use(auth.connect(auth.basic({
  realm: 'DR Nyhedspakker'
}, (user, pass, then) => {
  then(user === ADMIN_USER && pass === ADMIN_PASS)
})))

// CONTENTFUL ---

const contentful = require('contentful')

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  secure: true
})

// ROUTES ---

admin.get('/', (req, res) => {
  client.entries({
    content_type: 'package',
    order: '-fields.published_at',
    limit: 5
  }).then(packages => {
    return Promise.all(packages.map((pack, i) => {
      return new Promise((resolve, reject) => {
        client.entries({
          content_type: '2wKn6yEnZewu2SCCkus4as',
          order: 'fields.weight',
          'fields.package.sys.id': pack.sys.id
        }).then(entries => {
          pack.entries = entries
          return pack
        }).then(resolve, reject)
      })
    }))
  }).then(packages => {
    res.render('admin', {
      packages: packages
    })
  })
})

admin.post('/send', (req, res) => {
  sendPush(req.body.alert).then(json => {
    res.redirect(req.headers.referer)
  }, (err) => {
    res.send({ err })
  })
})

export default admin

// PUSH ---

import fetch from 'isomorphic-fetch'

const { PARSE_APP_ID, PARSE_REST_KEY } = process.env

function sendPush (alert) {
  const body = {
    where: { deviceType: 'ios' },
    data: { alert }
  }

  return fetch('https://api.parse.com/1/push', {
    method: 'POST',
    headers: {
      ['X-Parse-Application-Id']: PARSE_APP_ID,
      ['X-Parse-REST-API-Key']: PARSE_REST_KEY,
      ['Content-Type']: 'application/json'
    },
    body: JSON.stringify(body)
  }).then(resp => {
    return resp.json().then(json => {
      console.log(json)
      return json
    })
  }, err => { console.error(err) })
}
