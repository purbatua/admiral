require('dotenv').config()

module.exports = {
  env: 'production',
  host: process.env.HOST,
  port: process.env.PORT,
}