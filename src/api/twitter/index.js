'use strict'

import express from 'express'
import * as controller from './twitter.controller'
import auth from '../../auth'

const router = express.Router()

router.get('/', controller.index)
router.post('/', controller.create)


// module.exports = router

export default router
