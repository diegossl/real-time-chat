'use strict'

const express = require('express')
const router = express.Router()

router.get('/', function (request, response) {
  return response.render('index')
})

module.exports = router