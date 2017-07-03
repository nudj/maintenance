let logger = require('../lib/logger')
let path = require('path')
let express = require('express')
let cons = require('consolidate')

let app = express()
app.engine('html', cons.lodash)
app.set('view engine', 'html')
app.set('views', path.join(__dirname, 'views'))
app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.get('*', (req, res) => {
  logger.log('warn', 'Page requested', req.url)
  if (req.accepts('html')) {
    res.render('index', { url: req.url })
    return
  }
  if (req.accepts('json')) {
    res.send({ message: 'Site under maintenance' })
    return
  }
  res.type('txt').send('Site under maintenance')
})
app.listen(80, () => logger.log('info', 'App running'))
