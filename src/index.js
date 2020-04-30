import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
// import http from 'http'
// import routes from './routes'
import config from './config'

console.log('config', config)

const app = express()

app.set('appPath', path.join(config.root, 'admiral/public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

require('./routes')(app)

const server = app.listen(config.port, function() {
  var message = config.isProduction 
    ? 'Server running at ' + server.address().port
    : `Server running at http://${config.host}:${config.port}`
  console.log(message)
})


export default server

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World 6\n');
// }).listen(1337, '127.0.0.1');

// console.log('Server running at http://127.0.0.1:1337/');

// export default server;
