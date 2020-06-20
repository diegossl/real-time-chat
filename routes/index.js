'use strict'

const express = require('express')
const router = express.Router()
const ChatController = require('../app/controllers/ChatController')

router.get('/', ChatController.create)

module.exports = router