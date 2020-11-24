const express = require('express')
const router = express.Router()
const langController = require('../controllers/lang.controller')
const trimRequest = require('trim-request')

router.get(
    '/get',
    trimRequest.all,
    langController.getLang
)

module.exports = router
