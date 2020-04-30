'use strict'

import path from 'path'

const environment = process.env.NODE_ENV || 'development'
const config = require(`./${environment}.js`)

const def = {
  env: environment,
  isProduction: environment === 'production',
  root: path.normalize(__dirname + '/../../..'),
}

export default { ...def, ...config }