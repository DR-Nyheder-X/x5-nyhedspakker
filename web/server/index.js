import express from 'express'
import morgan from 'morgan'

const prod = process.env.NODE_ENV === 'production'

const app = express()

app.use(morgan('tiny'))

const root = __dirname
app.set('view engine', 'ejs')
app.set('views', root + '/views')
app.use(express.static(root + '/../public'))

if (!prod) { require('./devMiddleware')(app) }

import admin from './admin'
app.use('/admin', admin)

app.get('*', (req, res) => {
  res.render('index', {
    env: process.env.NODE_ENV,
    CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
  })
})

export default function runServer (port) {
  app.listen(port, err => {
    if (err) return console.error(err)
    console.log(`Running localhost:${port}`)
  })
}

// Babel6 doesn't auto module.exports
module.exports = runServer
