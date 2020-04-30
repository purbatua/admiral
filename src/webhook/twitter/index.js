'use strict'

import express from 'express'
import * as controller from './controller'
// import auth from '../../auth'

const router = express.Router()

router.get('/', controller.crc)
// router.post('/', controller.create)


// module.exports = router

export default router
